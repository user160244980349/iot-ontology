from copy import copy
from pprint import pprint

from ontology import construct_ontology, finish
from processor import process_policy
from reader import read_policies


def main():
    """
    Constructing ontology
        onto = construct_ontology()

    Making individuals
        i1 = onto.PrivacyPolicy()
        i2 = onto.Data()
        i3 = onto.DataProtectionOfficer()

    DataProperty assertion
        i4 = onto.Evidence()
        i4.evidenceContent = "text"

    ObjectProperty assertion
        i2.hasEvidence = [i4]
        i1.considersData.append(i2)

    Finishing work
        finish(onto)

    SPARQL example
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX owl: <http://www.w3.org/2002/07/owl#>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
        PREFIX onto: <file:///home/user/Source/repos/ontology/resources/iot-ontology-test.owl#>
        SELECT ?subject ?object ?content
        WHERE { ?subject onto:hasEvidence ?object .
                ?object onto:evidenceContent ?content }
    """

    mappings = {
        "First Party Collection/Use": "DataCollectionActivity",
        "Third Party Sharing/Collection": "DataSharingActivity",
        "User Choice/Control": "ConsentActivity",
        "User Access, Edit, & Deletion": "UserAccessActivity",
        "Data Retention": "DataRetentionActivity",
        "Data Security": "SecurityMechanism",
        "Policy Change": "PolicyChangeActivity",
        "Do Not Track": "UserOptActivity",
        "International & Specific Audiences": "UserSpecialCategory",
    }

    onto = construct_ontology("summary")

    policies = read_policies()
    for i, p in policies.items():
        process_policy(onto, i, p, mappings)
    finish(onto)

    for i, p in policies.items():
        o = construct_ontology(i)
        process_policy(o, i, p, mappings)
        finish(o, reason=False)


if __name__ == '__main__':
    main()
