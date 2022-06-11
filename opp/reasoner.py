import json
import os

from config import resources
from opp.reader import read_opp


def reason_attributes(policies, category):
    result = []
    for p in policies:
        for a in p["annotations"]:
            if a["category"] == category:
                result.extend(list(a["attributes"].keys()))
    return list(set(result))


def reason_values(policies, attribute):
    result = []
    for p in policies:
        for a in p["annotations"]:
            try:
                result.append(a["attributes"][attribute]["value"])
            except KeyError:
                pass
    return list(set(result))


def main():
    policies = read_opp()

    categories = list(set([a["category"] for p in policies for a in p["annotations"]]))
    categories_attributes = {c: reason_attributes(policies, c) for c in categories}
    values = {a: reason_values(policies, a) for a in [v for a in categories_attributes.values() for v in a]}

    structure = {category: {a: values[a] for a in attributes} for category, attributes in categories_attributes.items()}

    with open(os.path.join(resources, "opp_structure.json"), "w") as f:
        json.dump(structure, f, indent=8)

    for k, v in structure.items():
        with open(os.path.join(resources, f"{k}_structure.json"), "w") as f:
            json.dump(v, f, indent=8)


if __name__ == "__main__":
    main()
