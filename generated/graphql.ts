import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from 'react-query';
import { fetchData } from '../fetcher/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjectId: any;
};

export type Auth = {
  __typename?: 'Auth';
  _id: Scalars['ObjectId'];
  token: Scalars['String'];
};

export type CreateUserInput = {
  dob: Scalars['String'];
  email: Scalars['String'];
  family: Scalars['String'];
  gender: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type EditUserInput = {
  dob: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  family?: InputMaybe<Scalars['String']>;
  gender: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  deleteUser: User;
  editUser: User;
  login: Scalars['String'];
  logout: Auth;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDeleteUserArgs = {
  _id: Scalars['String'];
};


export type MutationEditUserArgs = {
  _id: Scalars['String'];
  data: EditUserInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  currentUser: User;
  user: User;
  users: Array<User>;
};


export type QueryUserArgs = {
  _id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ObjectId'];
  dob: Scalars['String'];
  email: Scalars['String'];
  family: Scalars['String'];
  gender: Scalars['String'];
  lastLogin: Scalars['Float'];
  name: Scalars['String'];
  password: Scalars['String'];
  roles: Array<Scalars['String']>;
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', _id: any, name: string, family: string, email: string, password: string, dob: string, gender: string, lastLogin: number }> };

export type UserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', _id: any, name: string, family: string, email: string, password: string, dob: string, gender: string, lastLogin: number } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', _id: any, name: string, family: string, email: string, password: string, dob: string, gender: string, lastLogin: number } };

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: any, name: string, family: string, email: string, password: string, dob: string, gender: string, lastLogin: number } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', _id: any, name: string, family: string, email: string, password: string, dob: string, gender: string, lastLogin: number } };

export type EditUserMutationVariables = Exact<{
  id: Scalars['String'];
  data: EditUserInput;
}>;


export type EditUserMutation = { __typename?: 'Mutation', editUser: { __typename?: 'User', _id: any, name: string, family: string, email: string, password: string, dob: string, gender: string, lastLogin: number } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'Auth', _id: any } };


export const UsersDocument = `
    query Users {
  users {
    _id
    name
    family
    email
    password
    dob
    gender
    lastLogin
  }
}
    `;
export const useUsersQuery = <
      TData = UsersQuery,
      TError = unknown
    >(
      variables?: UsersQueryVariables,
      options?: UseQueryOptions<UsersQuery, TError, TData>
    ) =>
    useQuery<UsersQuery, TError, TData>(
      variables === undefined ? ['Users'] : ['Users', variables],
      fetchData<UsersQuery, UsersQueryVariables>(UsersDocument, variables),
      options
    );
export const UserDocument = `
    query User($id: String!) {
  user(_id: $id) {
    _id
    name
    family
    email
    password
    dob
    gender
    lastLogin
  }
}
    `;
export const useUserQuery = <
      TData = UserQuery,
      TError = unknown
    >(
      variables: UserQueryVariables,
      options?: UseQueryOptions<UserQuery, TError, TData>
    ) =>
    useQuery<UserQuery, TError, TData>(
      ['User', variables],
      fetchData<UserQuery, UserQueryVariables>(UserDocument, variables),
      options
    );
export const CurrentUserDocument = `
    query currentUser {
  currentUser {
    _id
    name
    family
    email
    password
    dob
    gender
    lastLogin
  }
}
    `;
export const useCurrentUserQuery = <
      TData = CurrentUserQuery,
      TError = unknown
    >(
      variables?: CurrentUserQueryVariables,
      options?: UseQueryOptions<CurrentUserQuery, TError, TData>
    ) =>
    useQuery<CurrentUserQuery, TError, TData>(
      variables === undefined ? ['currentUser'] : ['currentUser', variables],
      fetchData<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, variables),
      options
    );
export const CreateUserDocument = `
    mutation CreateUser($data: CreateUserInput!) {
  createUser(data: $data) {
    _id
    name
    family
    email
    password
    dob
    gender
    lastLogin
  }
}
    `;
export const useCreateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>) =>
    useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>(
      ['CreateUser'],
      (variables?: CreateUserMutationVariables) => fetchData<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, variables)(),
      options
    );
export const DeleteUserDocument = `
    mutation DeleteUser($id: String!) {
  deleteUser(_id: $id) {
    _id
    name
    family
    email
    password
    dob
    gender
    lastLogin
  }
}
    `;
export const useDeleteUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteUserMutation, TError, DeleteUserMutationVariables, TContext>) =>
    useMutation<DeleteUserMutation, TError, DeleteUserMutationVariables, TContext>(
      ['DeleteUser'],
      (variables?: DeleteUserMutationVariables) => fetchData<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, variables)(),
      options
    );
export const EditUserDocument = `
    mutation EditUser($id: String!, $data: EditUserInput!) {
  editUser(_id: $id, data: $data) {
    _id
    name
    family
    email
    password
    dob
    gender
    lastLogin
  }
}
    `;
export const useEditUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<EditUserMutation, TError, EditUserMutationVariables, TContext>) =>
    useMutation<EditUserMutation, TError, EditUserMutationVariables, TContext>(
      ['EditUser'],
      (variables?: EditUserMutationVariables) => fetchData<EditUserMutation, EditUserMutationVariables>(EditUserDocument, variables)(),
      options
    );
export const LoginDocument = `
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['Login'],
      (variables?: LoginMutationVariables) => fetchData<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
      options
    );
export const LogoutDocument = `
    mutation Logout {
  logout {
    _id
  }
}
    `;
export const useLogoutMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LogoutMutation, TError, LogoutMutationVariables, TContext>) =>
    useMutation<LogoutMutation, TError, LogoutMutationVariables, TContext>(
      ['Logout'],
      (variables?: LogoutMutationVariables) => fetchData<LogoutMutation, LogoutMutationVariables>(LogoutDocument, variables)(),
      options
    );