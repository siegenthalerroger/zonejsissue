export class User {
    key: string;
    accountId: string;
    name: string;
    emailAddress: string;
    displayName: string;
    active: boolean;
    workingHours: number = 8;

    // TODO expand on this
    // https://developer.atlassian.com/cloud/jira/platform/rest/#User
}
