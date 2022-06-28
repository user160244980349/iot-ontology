from pprint import pprint

from owlready2 import *

from config import ontologies


def main():
    """
    How many mentions of privacy policy change notifications mechanisms do particular privacy policy state?
    """
    onto_path.append(ontologies)
    onto = get_ontology(
        f"http://test.org/iot-ontology-summary.owl").load()

    with onto:
        res = list(default_world.sparql("""
            
            PREFIX onto: <http://test.org/iot-ontology-summary.owl#>
            
            SELECT (COUNT(?mechanism) AS ?mentions)
            {
                ?policy         a                      onto:PrivacyPolicy         .
                ?policy         onto:policyId          883                        .
                ?policy         onto:considersActivity ?activity                  .
                ?activity       a                      onto:PolicyChangeActivity  .
                ?mechanismClass rdfs:subClassOf        onto:NotificationMechanism .
                ?mechanism      a                      ?mechanismClass            .
                ?activity       onto:hasMechanism      ?mechanism                 .
            }
            
        """))

        pprint(res)


if __name__ == '__main__':
    main()