

def process_policy(onto, i, p, mappings):
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
    policy = getattr(onto, "PrivacyPolicy")()
    agent1 = getattr(onto, "User")()
    agent2 = getattr(onto, "FirstParty")()
    agent3 = getattr(onto, "ThirdParties")()

    policy.policyId = i
    policy.considersAgent.extend([agent1, agent2, agent3])

    try:

        for s in p:
            entity = getattr(onto, mappings[s["c"]])()
            evidence = getattr(onto, "Evidence")()
            evidence.evidenceContent = s["t"]

            if s["c"] == "First Party Collection/Use":
                policy.considersActivity.append(entity)
                agent2.initiatesActivity.append(entity)

            elif s["c"] == "Third Party Sharing/Collection":
                policy.considersActivity.append(entity)
                agent3.initiatesActivity.append(entity)

            elif s["c"] == "User Choice/Control":
                policy.considersActivity.append(entity)
                agent1.initiatesActivity.append(entity)

            elif s["c"] == "User Access, Edit, & Deletion":
                policy.considersActivity.append(entity)
                agent1.initiatesActivity.append(entity)

            elif s["c"] == "Data Retention":
                policy.considersActivity.append(entity)
                agent2.initiatesActivity.append(entity)

            elif s["c"] == "Data Security":
                action = getattr(onto, "DataActivity")()
                policy.considersActivity.append(action)
                action.hasMechanism.append(entity)
                agent2.initiatesActivity.append(action)

            elif s["c"] == "Policy Change":
                policy.considersActivity.append(entity)
                agent2.initiatesActivity.append(entity)

            elif s["c"] == "Do Not Track":
                policy.considersActivity.append(entity)
                agent1.initiatesActivity.append(entity)

            elif s["c"] == "International & Specific Audiences":
                agent1.hasSpecialCategory.append(entity)

            entity.hasEvidence = evidence

    except KeyError:
        pass

    return onto
