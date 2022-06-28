from pprint import pprint

from owlready2 import *

from config import ontologies


def main():
    """
    How many privacy policies within ontology state the general notice in case of their change?
    """
    onto_path.append(ontologies)
    onto = get_ontology(
        f"http://test.org/iot-ontology-summary.owl").load()

    with onto:
        res = list(default_world.sparql("""
            
            PREFIX onto: <http://test.org/iot-ontology-summary.owl#>
            
            SELECT (COUNT(?policy) as ?amount)
            {
                ?mechanism a                      onto:OnWebsitePage         .
                ?activity  onto:hasMechanism      ?mechanism                 .
                ?policy    onto:considersActivity ?activity                  .
            }
            
        """))

        pprint(res)


if __name__ == '__main__':
    main()
