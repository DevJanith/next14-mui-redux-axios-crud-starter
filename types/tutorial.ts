export type Tutorial = {
  _id?: string
  title?: string
  description?: string
  published?: string
  createdAt?: Date
  updatedAt?: Date
};

export type Tutorials = {
  _id?: string
  title?: string
  description?: string
  published?: string
  createdAt?: Date
  updatedAt?: Date
};


export interface TutorialStateProps {
  tutorials: Tutorials[];
  tutorial: Tutorial | null;
  error: object | string | null;
  success: object | string | null;
  isLoading: boolean
}

export interface DefaultRootStateProps {
  tutorial: TutorialStateProps;
}
 