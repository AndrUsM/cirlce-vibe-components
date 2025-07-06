declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';
declare module '*.gif';

declare module '*.svg' {
  const result: string;
  export const ReactComponent: React.ComponentType<React.SVGProps<SVGElement>>;
  export default result;
}