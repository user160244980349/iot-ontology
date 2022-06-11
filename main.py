from pprint import pprint

from ontology import construct_ontology, finish
from opp.processor import process_opp
from opp.reader import read_opp


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
        PREFIX onto: <file:///home/user/Source/repos/ontology/resources/iot-ontology-summary.owl#>
        SELECT ?subject ?object ?content
        WHERE { ?subject onto:hasEvidence ?object .
                ?object onto:evidenceContent ?content }
    """

    # Ontology containing whole dataset
    onto = construct_ontology("summary")
    policies = read_opp()

    for p in policies:
        process_opp(onto, p)
    finish(onto)

    # Ontologies containing policies by 1
    for p in policies:
        o = construct_ontology()
        process_opp(o, p)
        finish(o, reason=False)


if __name__ == '__main__':
    main()
