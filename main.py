from mappings import mappings
from ontology import construct_ontology, finish
from opp_adapter import process_opp_policy
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

    onto = construct_ontology("summary")

    # Ontology containing whole dataset
    policies = read_policies()
    for i, p in policies.items():
        process_opp_policy(onto, i, p, mappings)
    finish(onto)

    # Ontologies containing policies by 1
    for i, p in policies.items():
        o = construct_ontology(i)
        process_opp_policy(o, i, p, mappings)
        finish(o, reason=False)


if __name__ == '__main__':
    main()
