import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';
export const connectorConfig: ConnectorConfig;

export type TimestampString = string;

export type UUIDString = string;

export type Int64String = string;

export type DateString = string;



export interface AddAppToUserData {
  user_update?: User_Key | null;
}

export interface AddAppToUserVariables {
  key: User_Key;
  appIds: string[];
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  uid: UUIDString;
  email: string;
  username: string;
  displayName?: string | null;
  photoURL?: string | null;
  defaultWorkspace?: UUIDString | null;
  appIds: string[];
}

export interface CreateUserWorkspaceData {
  userWorkspace_insert: UserWorkspace_Key;
}

export interface CreateUserWorkspaceVariables {
  userId: UUIDString;
  workspaceId: UUIDString;
  appId: string;
  role: string;
  profileId?: UUIDString | null;
}

export interface GetProfileData {
  profile?: {
    uid: UUIDString;
    userId: UUIDString;
    appId: string;
    displayName: string;
    title?: string | null;
    bio?: string | null;
    avatar?: string | null;
    skills?: string[] | null;
    social?: {
      twitter?: string | null;
      linkedin?: string | null;
      github?: string | null;
      website?: string | null;
    };
      privacy?: {
        isPublic?: boolean | null;
        showEmail?: boolean | null;
        showSocial?: boolean | null;
        showSkills?: boolean | null;
      };
        createdAt: TimestampString;
        updatedAt: TimestampString;
  } & Profile_Key;
}

export interface GetProfileVariables {
  key: Profile_Key;
}

export interface GetUserByEmailData {
  users: ({
    uid: UUIDString;
    email: string;
    username: string;
    displayName?: string | null;
    appIds?: string[] | null;
  } & User_Key)[];
}

export interface GetUserByEmailVariables {
  email: string;
}

export interface GetUserByUsernameData {
  users: ({
    uid: UUIDString;
    email: string;
    username: string;
    displayName?: string | null;
    appIds?: string[] | null;
  } & User_Key)[];
}

export interface GetUserByUsernameVariables {
  username: string;
}

export interface GetUserData {
  user?: {
    uid: UUIDString;
    email: string;
    username: string;
    displayName?: string | null;
    photoURL?: string | null;
    appIds?: string[] | null;
    defaultWorkspace?: UUIDString | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & User_Key;
}

export interface GetUserProfilesData {
  profiles: ({
    uid: UUIDString;
    displayName: string;
    title?: string | null;
    bio?: string | null;
    avatar?: string | null;
    privacy?: {
      isPublic?: boolean | null;
    };
  } & Profile_Key)[];
}

export interface GetUserProfilesVariables {
  userId: UUIDString;
  appId: string;
}

export interface GetUserVariables {
  key: User_Key;
}

export interface GetUserWorkspacesData {
  userWorkspaces: ({
    workspace: {
      uid: UUIDString;
      name: string;
      slug: string;
      description?: string | null;
      theme?: {
        primary?: string | null;
        logo?: string | null;
      };
    } & Workspace_Key;
      role: string;
      profile?: {
        uid: UUIDString;
        displayName: string;
        title?: string | null;
      } & Profile_Key;
        joinedAt: TimestampString;
  })[];
}

export interface GetUserWorkspacesVariables {
  userId: UUIDString;
  appId: string;
}

export interface GetWorkspaceBySlugData {
  workspaces: ({
    uid: UUIDString;
    name: string;
    slug: string;
    appId: string;
    description?: string | null;
    ownerId: UUIDString;
  } & Workspace_Key)[];
}

export interface GetWorkspaceBySlugVariables {
  slug: string;
}

export interface GetWorkspaceData {
  workspace?: {
    uid: UUIDString;
    name: string;
    slug: string;
    appId: string;
    description?: string | null;
    ownerId: UUIDString;
    theme?: {
      primary?: string | null;
      secondary?: string | null;
      logo?: string | null;
      background?: string | null;
    };
      settings?: {
        isPublic?: boolean | null;
        allowInvites?: boolean | null;
        allowMultipleProfiles?: boolean | null;
        features?: string[] | null;
      };
        createdAt: TimestampString;
        updatedAt: TimestampString;
  } & Workspace_Key;
}

export interface GetWorkspaceMembersData {
  userWorkspaces: ({
    userId: UUIDString;
    role: string;
    profile?: {
      displayName: string;
      title?: string | null;
      avatar?: string | null;
    };
      user: {
        email: string;
        username: string;
      };
        joinedAt: TimestampString;
  })[];
}

export interface GetWorkspaceMembersVariables {
  workspaceId: UUIDString;
}

export interface GetWorkspaceVariables {
  key: Workspace_Key;
}

export interface ListUsersData {
  users: ({
    uid: UUIDString;
    email: string;
    username: string;
    displayName?: string | null;
    photoURL?: string | null;
    appIds?: string[] | null;
  } & User_Key)[];
}

export interface ProfilePrivacy_Key {
  uid: UUIDString;
  __typename?: 'ProfilePrivacy_Key';
}

export interface ProfileSocial_Key {
  uid: UUIDString;
  __typename?: 'ProfileSocial_Key';
}

export interface Profile_Key {
  uid: UUIDString;
  __typename?: 'Profile_Key';
}

export interface RemoveUserFromWorkspaceData {
  userWorkspace_delete?: UserWorkspace_Key | null;
}

export interface RemoveUserFromWorkspaceVariables {
  key: UserWorkspace_Key;
}

export interface SearchProfilesData {
  profiles: ({
    uid: UUIDString;
    displayName: string;
    title?: string | null;
    bio?: string | null;
    avatar?: string | null;
  } & Profile_Key)[];
}

export interface SearchProfilesVariables {
  query: string;
  appId: string;
  limit?: number | null;
}

export interface SearchUsersData {
  users: ({
    uid: UUIDString;
    username: string;
    displayName?: string | null;
    photoURL?: string | null;
  } & User_Key)[];
}

export interface SearchUsersVariables {
  query: string;
  appId: string;
  limit?: number | null;
}

export interface SearchWorkspacesData {
  workspaces: ({
    uid: UUIDString;
    name: string;
    description?: string | null;
    theme?: {
      logo?: string | null;
    };
  } & Workspace_Key)[];
}

export interface SearchWorkspacesVariables {
  query: string;
  appId: string;
  limit?: number | null;
}

export interface UpdateUserData {
  user_update?: User_Key | null;
}

export interface UpdateUserVariables {
  key: User_Key;
  email?: string | null;
  username?: string | null;
  displayName?: string | null;
  photoURL?: string | null;
  defaultWorkspace?: UUIDString | null;
  appIds?: string[] | null;
}

export interface UpdateUserWorkspaceProfileData {
  userWorkspace_update?: UserWorkspace_Key | null;
}

export interface UpdateUserWorkspaceProfileVariables {
  key: UserWorkspace_Key;
  profileId: UUIDString;
}

export interface UpdateUserWorkspaceRoleData {
  userWorkspace_update?: UserWorkspace_Key | null;
}

export interface UpdateUserWorkspaceRoleVariables {
  key: UserWorkspace_Key;
  role: string;
}

export interface UserWorkspace_Key {
  userId: UUIDString;
  workspaceId: UUIDString;
  __typename?: 'UserWorkspace_Key';
}

export interface User_Key {
  uid: UUIDString;
  __typename?: 'User_Key';
}

export interface WorkspaceSettings_Key {
  uid: UUIDString;
  __typename?: 'WorkspaceSettings_Key';
}

export interface WorkspaceTheme_Key {
  uid: UUIDString;
  __typename?: 'WorkspaceTheme_Key';
}

export interface Workspace_Key {
  uid: UUIDString;
  __typename?: 'Workspace_Key';
}



/* Allow users to create refs without passing in DataConnect */
export function createUserRef(vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
/* Allow users to pass in custom DataConnect instances */
export function createUserRef(dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData,CreateUserVariables>;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData,CreateUserVariables>;


/* Allow users to create refs without passing in DataConnect */
export function updateUserRef(vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
/* Allow users to pass in custom DataConnect instances */
export function updateUserRef(dc: DataConnect, vars: UpdateUserVariables): MutationRef<UpdateUserData,UpdateUserVariables>;

export function updateUser(vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;
export function updateUser(dc: DataConnect, vars: UpdateUserVariables): MutationPromise<UpdateUserData,UpdateUserVariables>;


/* Allow users to create refs without passing in DataConnect */
export function addAppToUserRef(vars: AddAppToUserVariables): MutationRef<AddAppToUserData, AddAppToUserVariables>;
/* Allow users to pass in custom DataConnect instances */
export function addAppToUserRef(dc: DataConnect, vars: AddAppToUserVariables): MutationRef<AddAppToUserData,AddAppToUserVariables>;

export function addAppToUser(vars: AddAppToUserVariables): MutationPromise<AddAppToUserData, AddAppToUserVariables>;
export function addAppToUser(dc: DataConnect, vars: AddAppToUserVariables): MutationPromise<AddAppToUserData,AddAppToUserVariables>;


/* Allow users to create refs without passing in DataConnect */
export function createUserWorkspaceRef(vars: CreateUserWorkspaceVariables): MutationRef<CreateUserWorkspaceData, CreateUserWorkspaceVariables>;
/* Allow users to pass in custom DataConnect instances */
export function createUserWorkspaceRef(dc: DataConnect, vars: CreateUserWorkspaceVariables): MutationRef<CreateUserWorkspaceData,CreateUserWorkspaceVariables>;

export function createUserWorkspace(vars: CreateUserWorkspaceVariables): MutationPromise<CreateUserWorkspaceData, CreateUserWorkspaceVariables>;
export function createUserWorkspace(dc: DataConnect, vars: CreateUserWorkspaceVariables): MutationPromise<CreateUserWorkspaceData,CreateUserWorkspaceVariables>;


/* Allow users to create refs without passing in DataConnect */
export function updateUserWorkspaceRoleRef(vars: UpdateUserWorkspaceRoleVariables): MutationRef<UpdateUserWorkspaceRoleData, UpdateUserWorkspaceRoleVariables>;
/* Allow users to pass in custom DataConnect instances */
export function updateUserWorkspaceRoleRef(dc: DataConnect, vars: UpdateUserWorkspaceRoleVariables): MutationRef<UpdateUserWorkspaceRoleData,UpdateUserWorkspaceRoleVariables>;

export function updateUserWorkspaceRole(vars: UpdateUserWorkspaceRoleVariables): MutationPromise<UpdateUserWorkspaceRoleData, UpdateUserWorkspaceRoleVariables>;
export function updateUserWorkspaceRole(dc: DataConnect, vars: UpdateUserWorkspaceRoleVariables): MutationPromise<UpdateUserWorkspaceRoleData,UpdateUserWorkspaceRoleVariables>;


/* Allow users to create refs without passing in DataConnect */
export function updateUserWorkspaceProfileRef(vars: UpdateUserWorkspaceProfileVariables): MutationRef<UpdateUserWorkspaceProfileData, UpdateUserWorkspaceProfileVariables>;
/* Allow users to pass in custom DataConnect instances */
export function updateUserWorkspaceProfileRef(dc: DataConnect, vars: UpdateUserWorkspaceProfileVariables): MutationRef<UpdateUserWorkspaceProfileData,UpdateUserWorkspaceProfileVariables>;

export function updateUserWorkspaceProfile(vars: UpdateUserWorkspaceProfileVariables): MutationPromise<UpdateUserWorkspaceProfileData, UpdateUserWorkspaceProfileVariables>;
export function updateUserWorkspaceProfile(dc: DataConnect, vars: UpdateUserWorkspaceProfileVariables): MutationPromise<UpdateUserWorkspaceProfileData,UpdateUserWorkspaceProfileVariables>;


/* Allow users to create refs without passing in DataConnect */
export function removeUserFromWorkspaceRef(vars: RemoveUserFromWorkspaceVariables): MutationRef<RemoveUserFromWorkspaceData, RemoveUserFromWorkspaceVariables>;
/* Allow users to pass in custom DataConnect instances */
export function removeUserFromWorkspaceRef(dc: DataConnect, vars: RemoveUserFromWorkspaceVariables): MutationRef<RemoveUserFromWorkspaceData,RemoveUserFromWorkspaceVariables>;

export function removeUserFromWorkspace(vars: RemoveUserFromWorkspaceVariables): MutationPromise<RemoveUserFromWorkspaceData, RemoveUserFromWorkspaceVariables>;
export function removeUserFromWorkspace(dc: DataConnect, vars: RemoveUserFromWorkspaceVariables): MutationPromise<RemoveUserFromWorkspaceData,RemoveUserFromWorkspaceVariables>;


/* Allow users to create refs without passing in DataConnect */
export function listUsersRef(): QueryRef<ListUsersData, undefined>;/* Allow users to pass in custom DataConnect instances */
export function listUsersRef(dc: DataConnect): QueryRef<ListUsersData,undefined>;

export function listUsers(): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect): QueryPromise<ListUsersData,undefined>;


/* Allow users to create refs without passing in DataConnect */
export function getUserRef(vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getUserRef(dc: DataConnect, vars: GetUserVariables): QueryRef<GetUserData,GetUserVariables>;

export function getUser(vars: GetUserVariables): QueryPromise<GetUserData, GetUserVariables>;
export function getUser(dc: DataConnect, vars: GetUserVariables): QueryPromise<GetUserData,GetUserVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getUserByEmailRef(vars: GetUserByEmailVariables): QueryRef<GetUserByEmailData, GetUserByEmailVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getUserByEmailRef(dc: DataConnect, vars: GetUserByEmailVariables): QueryRef<GetUserByEmailData,GetUserByEmailVariables>;

export function getUserByEmail(vars: GetUserByEmailVariables): QueryPromise<GetUserByEmailData, GetUserByEmailVariables>;
export function getUserByEmail(dc: DataConnect, vars: GetUserByEmailVariables): QueryPromise<GetUserByEmailData,GetUserByEmailVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getUserByUsernameRef(vars: GetUserByUsernameVariables): QueryRef<GetUserByUsernameData, GetUserByUsernameVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getUserByUsernameRef(dc: DataConnect, vars: GetUserByUsernameVariables): QueryRef<GetUserByUsernameData,GetUserByUsernameVariables>;

export function getUserByUsername(vars: GetUserByUsernameVariables): QueryPromise<GetUserByUsernameData, GetUserByUsernameVariables>;
export function getUserByUsername(dc: DataConnect, vars: GetUserByUsernameVariables): QueryPromise<GetUserByUsernameData,GetUserByUsernameVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getWorkspaceRef(vars: GetWorkspaceVariables): QueryRef<GetWorkspaceData, GetWorkspaceVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getWorkspaceRef(dc: DataConnect, vars: GetWorkspaceVariables): QueryRef<GetWorkspaceData,GetWorkspaceVariables>;

export function getWorkspace(vars: GetWorkspaceVariables): QueryPromise<GetWorkspaceData, GetWorkspaceVariables>;
export function getWorkspace(dc: DataConnect, vars: GetWorkspaceVariables): QueryPromise<GetWorkspaceData,GetWorkspaceVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getWorkspaceBySlugRef(vars: GetWorkspaceBySlugVariables): QueryRef<GetWorkspaceBySlugData, GetWorkspaceBySlugVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getWorkspaceBySlugRef(dc: DataConnect, vars: GetWorkspaceBySlugVariables): QueryRef<GetWorkspaceBySlugData,GetWorkspaceBySlugVariables>;

export function getWorkspaceBySlug(vars: GetWorkspaceBySlugVariables): QueryPromise<GetWorkspaceBySlugData, GetWorkspaceBySlugVariables>;
export function getWorkspaceBySlug(dc: DataConnect, vars: GetWorkspaceBySlugVariables): QueryPromise<GetWorkspaceBySlugData,GetWorkspaceBySlugVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getUserWorkspacesRef(vars: GetUserWorkspacesVariables): QueryRef<GetUserWorkspacesData, GetUserWorkspacesVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getUserWorkspacesRef(dc: DataConnect, vars: GetUserWorkspacesVariables): QueryRef<GetUserWorkspacesData,GetUserWorkspacesVariables>;

export function getUserWorkspaces(vars: GetUserWorkspacesVariables): QueryPromise<GetUserWorkspacesData, GetUserWorkspacesVariables>;
export function getUserWorkspaces(dc: DataConnect, vars: GetUserWorkspacesVariables): QueryPromise<GetUserWorkspacesData,GetUserWorkspacesVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getProfileRef(vars: GetProfileVariables): QueryRef<GetProfileData, GetProfileVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getProfileRef(dc: DataConnect, vars: GetProfileVariables): QueryRef<GetProfileData,GetProfileVariables>;

export function getProfile(vars: GetProfileVariables): QueryPromise<GetProfileData, GetProfileVariables>;
export function getProfile(dc: DataConnect, vars: GetProfileVariables): QueryPromise<GetProfileData,GetProfileVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getUserProfilesRef(vars: GetUserProfilesVariables): QueryRef<GetUserProfilesData, GetUserProfilesVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getUserProfilesRef(dc: DataConnect, vars: GetUserProfilesVariables): QueryRef<GetUserProfilesData,GetUserProfilesVariables>;

export function getUserProfiles(vars: GetUserProfilesVariables): QueryPromise<GetUserProfilesData, GetUserProfilesVariables>;
export function getUserProfiles(dc: DataConnect, vars: GetUserProfilesVariables): QueryPromise<GetUserProfilesData,GetUserProfilesVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getWorkspaceMembersRef(vars: GetWorkspaceMembersVariables): QueryRef<GetWorkspaceMembersData, GetWorkspaceMembersVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getWorkspaceMembersRef(dc: DataConnect, vars: GetWorkspaceMembersVariables): QueryRef<GetWorkspaceMembersData,GetWorkspaceMembersVariables>;

export function getWorkspaceMembers(vars: GetWorkspaceMembersVariables): QueryPromise<GetWorkspaceMembersData, GetWorkspaceMembersVariables>;
export function getWorkspaceMembers(dc: DataConnect, vars: GetWorkspaceMembersVariables): QueryPromise<GetWorkspaceMembersData,GetWorkspaceMembersVariables>;


/* Allow users to create refs without passing in DataConnect */
export function searchUsersRef(vars: SearchUsersVariables): QueryRef<SearchUsersData, SearchUsersVariables>;
/* Allow users to pass in custom DataConnect instances */
export function searchUsersRef(dc: DataConnect, vars: SearchUsersVariables): QueryRef<SearchUsersData,SearchUsersVariables>;

export function searchUsers(vars: SearchUsersVariables): QueryPromise<SearchUsersData, SearchUsersVariables>;
export function searchUsers(dc: DataConnect, vars: SearchUsersVariables): QueryPromise<SearchUsersData,SearchUsersVariables>;


/* Allow users to create refs without passing in DataConnect */
export function searchWorkspacesRef(vars: SearchWorkspacesVariables): QueryRef<SearchWorkspacesData, SearchWorkspacesVariables>;
/* Allow users to pass in custom DataConnect instances */
export function searchWorkspacesRef(dc: DataConnect, vars: SearchWorkspacesVariables): QueryRef<SearchWorkspacesData,SearchWorkspacesVariables>;

export function searchWorkspaces(vars: SearchWorkspacesVariables): QueryPromise<SearchWorkspacesData, SearchWorkspacesVariables>;
export function searchWorkspaces(dc: DataConnect, vars: SearchWorkspacesVariables): QueryPromise<SearchWorkspacesData,SearchWorkspacesVariables>;


/* Allow users to create refs without passing in DataConnect */
export function searchProfilesRef(vars: SearchProfilesVariables): QueryRef<SearchProfilesData, SearchProfilesVariables>;
/* Allow users to pass in custom DataConnect instances */
export function searchProfilesRef(dc: DataConnect, vars: SearchProfilesVariables): QueryRef<SearchProfilesData,SearchProfilesVariables>;

export function searchProfiles(vars: SearchProfilesVariables): QueryPromise<SearchProfilesData, SearchProfilesVariables>;
export function searchProfiles(dc: DataConnect, vars: SearchProfilesVariables): QueryPromise<SearchProfilesData,SearchProfilesVariables>;


