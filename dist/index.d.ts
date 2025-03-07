import { AxiosInstance, AxiosRequestConfig } from 'axios';
export declare const STORAGE_KEY: string;
declare type Token = string;
export interface AuthTokens {
    accessToken: Token;
    refreshToken: Token;
}
/**
 * Checks if refresh tokens are stored
 * @async
 * @returns {Promise<boolean>} Whether the user is logged in or not
 */
export declare const isLoggedIn: () => Promise<boolean>;
/**
 * Sets the access and refresh tokens
 * @async
 * @param {AuthTokens} tokens - Access and Refresh tokens
 * @returns {Promise}
 */
export declare const setAuthTokens: (tokens: AuthTokens) => Promise<void>;
/**
 * Sets the access token
 * @async
 * @param {Promise} token - Access token
 */
export declare const setAccessToken: (token: Token) => Promise<void>;
/**
 * Clears both tokens
 * @async
 * @param {Promise}
 */
export declare const clearAuthTokens: () => Promise<void>;
/**
 * Returns the stored refresh token
 * @async
 * @returns {Promise<string>} Refresh token
 */
export declare const getRefreshToken: () => Promise<Token | undefined>;
/**
 * Returns the stored access token
 * @returns {Promise<string>} Access token
 */
export declare const getAccessToken: () => Token | undefined;
/**
 * @callback requestRefresh
 * @param {string} refreshToken - Token that is sent to the backend
 * @returns {Promise} Promise that resolves in an access token
 */
/**
 * Gets the current access token, exchanges it with a new one if it's expired and then returns the token.
 * @async
 * @param {requestRefresh} requestRefresh - Function that is used to get a new access token
 * @returns {Promise<string>} Access token
 */
export declare const refreshTokenIfNeeded: (requestRefresh: TokenRefreshRequest) => Promise<Token | undefined>;
/**
 *
 * @param {Axios} axios - Axios instance to apply the interceptor to
 * @param {AuthTokenInterceptorConfig} config - Configuration for the interceptor
 */
export declare const applyAuthTokenInterceptor: (axios: AxiosInstance, config: AuthTokenInterceptorConfig) => void;
export declare type TokenRefreshRequest = (refreshToken: string) => Promise<Token | AuthTokens>;
export interface AuthTokenInterceptorConfig {
    header?: string;
    headerPrefix?: string;
    requestRefresh: TokenRefreshRequest;
}
/**
 * Function that returns an Axios Intercepter that:
 * - Applies that right auth header to requests
 * - Refreshes the access token when needed
 * - Puts subsequent requests in a queue and executes them in order after the access token has been refreshed.
 *
 * @param {AuthTokenInterceptorConfig} config - Configuration for the interceptor
 * @returns {Promise<AxiosRequestConfig} Promise that resolves in the supplied requestConfig
 */
export declare const authTokenInterceptor: ({ header, headerPrefix, requestRefresh }: AuthTokenInterceptorConfig) => (requestConfig: AxiosRequestConfig) => Promise<AxiosRequestConfig>;
/**
 * Check if tokens are currently being refreshed
 *
 * @returns {boolean} True if the tokens are currently being refreshed, false is not
 */
export declare function getIsRefreshing(): boolean;
/**
 * Update refresh state
 *
 * @param {boolean} newRefreshingState
 */
export declare function setIsRefreshing(newRefreshingState: boolean): void;
export {};
//# sourceMappingURL=index.d.ts.map