from pprint import pprint

from ontology import construct_ontology, finish
from processor import process_policies
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
    onto = construct_ontology()

    mappings = {
        "First Party Collection/Use": onto.DataCollection,
        "Third Party Sharing/Collection": onto.DataSharing,
        "User Choice/Control": onto.Consent,
        "User Access, Edit, & Deletion": onto.UserAccess,
        "Data Retention": onto.DataRetention,
        "Data Security": onto.SecurityMechanism,
        "Policy Change": onto.PolicyChange,
        "Do Not Track": onto.UserOpt,
        "International & Specific Audiences": onto.UserSpecialCategory,
    }

    policies = read_policies()
    process_policies(onto, policies, mappings)

    finish(onto)


if __name__ == '__main__':
    main()
