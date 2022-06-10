from pprint import pprint

_ID = -1


def process_opp(onto, policy, mappings):
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
    """
    global _ID
    _ID += 1

    agent1 = getattr(onto, "User")()
    agent2 = getattr(onto, "FirstParty")()
    agent3 = getattr(onto, "ThirdParties")()

    policy_instance = getattr(onto, "PrivacyPolicy")()
    policy_instance.policyId = int(policy["id"])
    policy_instance.policyWebsite = policy["name"]
    policy_instance.considersAgent.extend([agent1, agent2, agent3])

    for a in policy["annotations"]:

        if a["category"] == "Other":
            continue

        entity = getattr(onto, mappings[a["category"]])()
        evidence = getattr(onto, "Evidence")()
        evidence.evidenceContent = a["segment_text"]

        if a["category"] == "First Party Collection/Use":
            policy_instance.considersActivity.append(entity)
            agent2.initiatesActivity.append(entity)

        elif a["category"] == "Third Party Sharing/Collection":
            policy_instance.considersActivity.append(entity)
            agent3.initiatesActivity.append(entity)

        elif a["category"] == "User Choice/Control":
            policy_instance.considersActivity.append(entity)
            agent1.initiatesActivity.append(entity)

        elif a["category"] == "User Access, Edit, and Deletion":
            policy_instance.considersActivity.append(entity)
            agent1.initiatesActivity.append(entity)

        elif a["category"] == "Data Retention":
            policy_instance.considersActivity.append(entity)
            agent2.initiatesActivity.append(entity)

        elif a["category"] == "Data Security":
            action = getattr(onto, "DataActivity")()
            policy_instance.considersActivity.append(action)
            action.hasMechanism.append(entity)
            agent2.initiatesActivity.append(action)

        elif a["category"] == "Policy Change":
            policy_instance.considersActivity.append(entity)
            agent2.initiatesActivity.append(entity)

        elif a["category"] == "Do Not Track":
            policy_instance.considersActivity.append(entity)
            agent1.initiatesActivity.append(entity)

        elif a["category"] == "International and Specific Audiences":
            agent1.hasSpecialCategory.append(entity)

        entity.hasEvidence = evidence

    return onto
