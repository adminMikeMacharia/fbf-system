export function useApiClient() {
  const baseUrl = (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_API_BASE) || "";
  return {
    get: (path: string) => fetch(`${baseUrl}${path}`).then(r => r.json()),
    post: (path: string, body: unknown) => fetch(`${baseUrl}${path}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }).then(r => r.json()),
  };
}
export default useApiClient;
