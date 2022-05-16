import json


def read_policies():
    with open("resources/datasets/all_segments.json", "r", encoding="utf-8") as f:
        segments = json.load(f)

        ids = set([s["file_id"] for s in segments])
        policies = {id_: [] for id_ in ids}

        for s in segments:
            policies[s["file_id"]].append({"c": s["category"], "t": s["segment_text"]})

    return policies
