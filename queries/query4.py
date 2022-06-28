from pprint import pprint

from owlready2 import *

from config import ontologies


def main():
    """
    What are the possible causes for policy change in particular privacy policy?
    """
    onto_path.append(ontologies)
    onto = get_ontology(
        f"http://test.org/iot-ontology-summary.owl").load()

    with onto:
        res = list(default_world.sparql("""
            
            PREFIX onto: <http://test.org/iot-ontology-summary.owl#>
            
            SELECT ?class
            {
                ?policy   a                         onto:PrivacyPolicy        .
                ?policy   onto:policyId             635                       .
                ?policy   onto:considersActivity    ?activity                 .
                ?activity a                         onto:PolicyChangeActivity .
                ?activity onto:hasPolicyChangeCause ?cause                    .
                ?cause    a                         ?class                    .
            }
            
        """))

        pprint(res)


if __name__ == '__main__':
    main()
