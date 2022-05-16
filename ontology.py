from owlready2 import *


def construct_ontology():
    ontology = get_ontology(
        "file:///home/user/Source/repos/ontology/resources/iot-ontology-test.owl")

    with ontology:
        # Core
        class PrivacyPolicy(Thing): pass

        # Activities
        class Activity(Thing): pass

        class Breach(Activity): pass

        class Control(Activity): pass

        class PolicyChange(Control): pass

        class ReportBreach(Control): pass

        class Consent(Control): pass

        class GiveConsent(Consent): pass

        class WithdrawConsent(Consent): pass

        class DataControl(Control): pass

        class UserAccess(DataControl): pass

        class UserPrivacy(DataControl): pass

        class UserOpt(DataControl): pass

        class DataActivity(Activity): pass

        class DataUse(DataActivity): pass

        class DataCollection(DataActivity): pass

        class DataSharing(DataActivity): pass

        class DataRetention(DataActivity): pass

        # Agents
        class Agent(Thing): pass

        class User(Agent): pass

        class FirstParty(Agent): pass

        class DataProtectionOfficer(Agent): pass

        class ThirdParties(Agent): pass

        # Data
        class Data(Thing): pass

        class PersonalData(Data): pass

        class NonPersonalData(Data): pass

        class SensitiveData(PersonalData): pass

        class NonSensitiveData(PersonalData): pass

        class FinancialData(NonSensitiveData): pass

        class DeviceData(NonSensitiveData): pass

        class AppData(NonSensitiveData): pass

        class TrackingData(NonSensitiveData): pass

        class ReligionData(SensitiveData): pass

        class RacialData(SensitiveData): pass

        class HealthData(SensitiveData): pass

        class GenericData(SensitiveData): pass

        class CrimeData(SensitiveData): pass

        class BiometricData(SensitiveData): pass

        # Causes
        class Cause(Thing): pass

        class BreachCause(Cause): pass

        class ForceMajeur(BreachCause): pass

        class Intentional(BreachCause): pass

        class Unintentional(BreachCause): pass

        class PolicyChangeCause(Cause): pass

        class PrivacyRelated(PolicyChangeCause): pass

        class NonPrivacyRelated(PolicyChangeCause): pass

        class MergeAcquisition(PolicyChangeCause): pass

        class OtherPolicyChangeCause(PolicyChangeCause): pass

        # Consequences
        class Consequence(Thing): pass

        class BreachConsequence(Consequence): pass

        class RemoveCompromisedInformation(BreachConsequence): pass

        class Compensation(BreachConsequence): pass

        class BreachInvestigation(BreachConsequence): pass

        class PolicyChangeConsequence(Consequence): pass

        class UserChoiceConsequence(Consequence): pass

        class NoServiceRestriction(UserChoiceConsequence): pass

        class PartialServiceRestriction(UserChoiceConsequence): pass

        class FullServiceRestriction(UserChoiceConsequence): pass

        # Mechanisms
        class Mechanism(Thing): pass

        class NotificationMechanism(Mechanism): pass

        class OnWebsitePage(NotificationMechanism): pass

        class ViaPostalMail(NotificationMechanism): pass

        class ViaSMS(NotificationMechanism): pass

        class OnService(NotificationMechanism): pass

        class ViaPhoneCall(NotificationMechanism): pass

        class InPrivacyPolicy(NotificationMechanism): pass

        class ViaEmail(NotificationMechanism): pass

        class DataRetentionMechanism(Mechanism): pass

        class DataSharingMechanism(Mechanism): pass

        class DataCollectionMechanism(Mechanism): pass

        class DataControlMechanism(Mechanism): pass

        class DataActivityForm(DataControlMechanism): pass

        class SecurityMechanism(Mechanism): pass

        class TechnicalMeasures(SecurityMechanism): pass

        class PseudoAnonymization(TechnicalMeasures): pass

        class Encription(TechnicalMeasures): pass

        class OrganizationalMeasures(SecurityMechanism): pass

        # Mechanism procedures
        class MechanismProcedure(Thing): pass

        class DataCollectionProcedure(MechanismProcedure): pass

        class DataSharingProcedure(MechanismProcedure): pass

        class PolicyChangeNotificationProcedure(MechanismProcedure): pass

        # Mechanism modes
        class MechanismMode(Thing): pass

        class DataSharingMode(MechanismMode): pass

        class DataCollectionMode(MechanismMode): pass

        # Time periods
        class TimePeriod(Thing): pass

        class DataRetentionTime(TimePeriod): pass

        class BreachReportTime(TimePeriod): pass

        class BreachInvestigationTime(TimePeriod): pass

        class PolicyAcceptanceTime(TimePeriod): pass

        # Purposes
        class Purpose(Thing): pass

        class DataActivityPurpose(Purpose): pass

        # Basis
        class Basis(Thing): pass

        class LegalBasis(Basis): pass

        # Policy change scope
        class PolicyChangeScope(Thing): pass

        # Evidence
        class Evidence(Thing): pass

        # User special category
        class UserSpecialCategory(Thing): pass

        # Object properties
        # Considers
        class considers(ObjectProperty): pass

        # Considers agents
        class considersAgents(considers):
            domain = [PrivacyPolicy]
            range = [Agent]

        # Considers activities
        class considersActivities(considers):
            domain = [PrivacyPolicy]
            range = [Activity]

        # Considers data
        class considersData(considers):
            domain = [PrivacyPolicy]
            range = [Data]

        # Applies
        class applies(ObjectProperty): pass

        class appliesToData(applies):
            domain = [Activity]
            range = [Data]

        # Has
        class has(ObjectProperty): pass

        class hasBreachCause(has):
            domain = [Breach]
            range = [BreachCause]

        class hasBreachConsequence(has):
            domain = [Breach]
            range = [BreachConsequence]

        class hasBreachInvestigationTime(has):
            domain = [BreachInvestigation]
            range = [BreachInvestigationTime]

        class hasBreachReportTime(has):
            domain = [ReportBreach]
            range = [BreachReportTime]

        class hasDataActivityPurpose(has):
            domain = [DataActivity]
            range = [DataActivityPurpose]

        class hasDataRetentionTime(has):
            domain = [DataRetention]
            range = [DataRetentionTime]

        class hasEvidence(has, FunctionalProperty):
            domain = [Thing]
            range = [Evidence]

        class hasLegalBasis(has):
            domain = [DataActivity]
            range = [LegalBasis]

        class hasMechanism(has):
            domain = [Activity]
            range = [Mechanism]

        class hasMode(has):
            domain = [Mechanism]
            range = [MechanismMode]

        class hasPolicyAcceptanceTime(has):
            domain = [PolicyChange]
            range = [PolicyAcceptanceTime]

        class hasPolicyChangeCause(has):
            domain = [PolicyChange]
            range = [PolicyChangeCause]

        class hasPolicyChangeConsequence(has):
            domain = [PolicyChange]
            range = [PolicyChangeConsequence]

        class hasProcedure(has):
            domain = [Mechanism]
            range = [MechanismProcedure]

        class hasSpecialCategory(has):
            domain = [User]
            range = [UserSpecialCategory]

        # Initiates
        class initiates(ObjectProperty): pass

        class initiatesActivity(initiates):
            domain = [Agent]
            range = [Activity]

        # Notifies
        class notifies(ObjectProperty): pass

        class notifiesAgent(notifies):
            domain = [ReportBreach]
            range = [Agent]

        # Owns
        class owns(ObjectProperty): pass

        class ownsData(owns):
            domain = [Agent]
            range = [Data]

        # Shares
        class shares(ObjectProperty): pass

        class sharesWithAgent(shares):
            domain = [DataSharing]
            range = [Agent]

        # Data properties
        class evidenceContent(DataProperty, FunctionalProperty):
            domain = [Evidence]
            range = [str]

        class policyId(DataProperty, FunctionalProperty):
            domain = [PrivacyPolicy]
            range = [int]

    return ontology


def finish(o):
    o.save(format="ntriples")
