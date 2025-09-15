export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ContactApiResponse extends ApiResponse {
  data?: {
    id: string;
    message: string;
  };
}