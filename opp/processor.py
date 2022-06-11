from pprint import pprint

_ID = -1


def process_opp(onto, policy):
    """
    Constructing ontology
        onto = construct_ontology()

    Making individuals
        i1 = onto.PrivacyPolicy()
        i2 = onto.Data()
        i3 = onto.DataProtectionOfficer()

    DataProperty assertion]
        i4 = onto.Evidence()
        i4.evidenceContent = "text"

    ObjectProperty assertion
        i2.hasEvidence = [i4]
        i1.considersData.append(i2)

    Finishing work
        finish(onto)

    mappings = {
        "First Party Collection/Use": "DataCollectionActivity",
        "Third Party Sharing/Collection": "DataSharingActivity",
        "User Choice/Control": "ConsentActivity",
        "User Access, Edit and Deletion": "UserAccessActivity",
        "Data Retention": "DataRetentionActivity",
        "Data Security": "SecurityMechanism",
        "Policy Change": "PolicyChangeActivity",
        "Do Not Track": "UserOptActivity",
        "International and Specific Audiences": "UserSpecialCategory",
    }

    Data Security is needed to be connected with all activities

    Notions:
        Write migration scheme for each category of OPP-115
        Data Security goes in the end and is connected to all activities
        Three of actors are mandatory and unique FP, TP, and User
    """
    global _ID
    _ID += 1

    agent1 = onto.User()
    agent2 = onto.FirstParty()
    agent3 = onto.ThirdParties()

    policy_instance = onto.PrivacyPolicy()
    policy_instance.policyId = int(policy["id"])
    policy_instance.policyWebsite = policy["name"]
    policy_instance.considersAgent.extend([agent1, agent2, agent3])

    for a in policy["annotations"]:
        if a["category"] == "Other":
            continue

        if a["category"] == "First Party Collection/Use":
            category = onto.DataCollectionActivity()
            policy_instance.considersActivity.append(category)
            agent2.initiatesActivity.append(category)

            evidence = onto.Evidence()
            evidence.evidenceContent = a["segment_text"]
            category.hasEvidence.append(evidence)

        elif a["category"] == "Third Party Sharing/Collection":
            category = onto.DataSharingActivity()
            policy_instance.considersActivity.append(category)
            agent3.initiatesActivity.append(category)

            evidence = onto.Evidence()
            evidence.evidenceContent = a["segment_text"]
            category.hasEvidence.append(evidence)

        elif a["category"] == "User Choice/Control":
            category = onto.ConsentActivity()
            policy_instance.considersActivity.append(category)
            agent1.initiatesActivity.append(category)

            evidence = onto.Evidence()
            evidence.evidenceContent = a["segment_text"]
            category.hasEvidence.append(evidence)

        elif a["category"] == "User Access, Edit and Deletion":

            evidence = onto.Evidence()
            evidence.evidenceContent = a["segment_text"]

            activity = onto.UserAccessActivity()
            activity.hasEvidence.append(evidence)
            policy_instance.considersActivity.append(activity)
            agent1.initiatesActivity.append(activity)

            if a["attributes"]["Access Scope"]["value"] == "User account data":
                data = onto.AccountData()
                data.hasEvidence.append(evidence)
                policy_instance.considersData.append(data)
                activity.isAppliedTo.append(data)
            elif a["attributes"]["Access Scope"]["value"] == "Other data about user":
                data = onto.NonSensitiveData()
                data.hasEvidence.append(evidence)
                policy_instance.considersData.append(data)
                activity.isAppliedTo.append(data)
            elif a["attributes"]["Access Scope"]["value"] == "Profile data":
                data = onto.SensitiveData()
                data.hasEvidence.append(evidence)
                policy_instance.considersData.append(data)
                activity.isAppliedTo.append(data)
            elif a["attributes"]["Access Scope"]["value"] == "Transactional data":
                data = onto.FinancialData()
                data.hasEvidence.append(evidence)
                policy_instance.considersData.append(data)
                activity.isAppliedTo.append(data)

        elif a["category"] == "Data Retention":
            category = onto.DataRetentionActivity()
            policy_instance.considersActivity.append(category)
            agent2.initiatesActivity.append(category)

            evidence = onto.Evidence()
            evidence.evidenceContent = a["segment_text"]
            category.hasEvidence.append(evidence)

        elif a["category"] == "Data Security":
            category = onto.SecurityMechanism()
            action = onto.DataActivity()
            policy_instance.considersActivity.append(action)
            action.hasMechanism.append(category)
            agent2.initiatesActivity.append(action)

            evidence = onto.Evidence()
            evidence.evidenceContent = a["segment_text"]
            category.hasEvidence.append(evidence)

        elif a["category"] == "Do Not Track":
            category = onto.UserOptActivity()
            policy_instance.considersActivity.append(category)
            agent1.initiatesActivity.append(category)

            evidence = onto.Evidence()
            evidence.evidenceContent = a["segment_text"]
            category.hasEvidence.append(evidence)

        elif a["category"] == "International and Specific Audiences":
            category = onto.UserSpecialCategory()
            agent1.hasSpecialCategory.append(category)

            evidence = onto.Evidence()
            evidence.evidenceContent = a["segment_text"]
            category.hasEvidence.append(evidence)

        elif a["category"] == "Policy Change":
            category = onto.PolicyChangeActivity()
            policy_instance.considersActivity.append(category)
            agent2.initiatesActivity.append(category)

            evidence = onto.Evidence()
            evidence.evidenceContent = a["segment_text"]
            category.hasEvidence.append(evidence)

    return onto
