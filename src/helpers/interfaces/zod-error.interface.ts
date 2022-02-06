export interface ValidationErrorType {
    message: string;
    code?: string;
    path?: string;
    expected?: string;
    received?: string;
  }