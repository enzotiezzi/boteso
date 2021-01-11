export interface IExecuter {
    type: string;

    run(args: string[]): void;
}