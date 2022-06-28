from pprint import pprint

from owlready2 import *

from config import ontologies


def main():
    """
    Which privacy policies state mechanisms of policy change notifications?
    """
    onto_path.append(ontologies)
    onto = get_ontology(
        f"http://test.org/iot-ontology-summary.owl").load()

    with onto:
        res = list(default_world.sparql("""
            
            PREFIX onto: <http://test.org/iot-ontology-summary.owl#>
            
            SELECT ?mechanism ?activity ?id ?website
            {
                ?class     rdfs:subClassOf        onto:NotificationMechanism .
                ?mechanism a                      ?class                     .
                ?activity  onto:hasMechanism      ?mechanism                 .
                ?policy    onto:considersActivity ?activity                  .
                ?activity  a                      onto:PolicyChangeActivity  .
                ?policy    onto:policyId          ?id                        .
                ?policy    onto:policyWebsite     ?website                   .
                ?mechanism onto:hasEvidence       ?evidence                  .
                ?evidence  onto:evidenceContent   ?content                   .
            }
            
        """))

        pprint(res)


if __name__ == '__main__':
    main()
