export interface IExecuter {
    run(args: string[]): Promise<void>;
}