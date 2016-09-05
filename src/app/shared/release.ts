import { Artifact } from './artifact'
export class Release {
    constructor(public name: string,
    public artifacts: Artifact[],
    public hotfixes: Release[]){}
}
