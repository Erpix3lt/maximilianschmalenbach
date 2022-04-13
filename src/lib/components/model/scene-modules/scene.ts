
export class Settings{

    constructor(theDisplayWidth:number, theDisplayHeigth: number, thePathToGLTF: string){
        this._displayHeight = theDisplayHeigth;
        this._displayWidth = theDisplayWidth;
        this._pathToGLTF = thePathToGLTF;
    }

    private _pathToGLTF: string;

    private _displayHeight: number;
    private _displayWidth: number;

    public get displayHeight(){
        return this._displayHeight;
    }

    public get displayWidth(){
        return this._displayWidth;
    }

    public set displayHeight(theDisplayHeight: number){
        this._displayHeight = theDisplayHeight;
    }

    public set displayWidth(theDisplayWidth: number){
        this._displayWidth = theDisplayWidth;
    }

    public get pathToGLTF(){
        return this._pathToGLTF
    }

    public set pathToGLFT(thePathToGLTF: string){
        this._pathToGLTF = thePathToGLTF;
    }
    
}

export class Character{
    private _model;
    private _neck: object;
    private _waist: object;

    public get model() {
        return this._model;
    }
    public set model(value) {
        this._model = value;
    }

    public get neck(): object {
        return this._neck;
    }
    public set neck(value: object) {
        this._neck = value;
    }

    public get waist(): object {
        return this._waist;
    }
    public set waist(value: object) {
        this._waist = value;
    }
}

export class World{
    private _renderer;
    private _mixer;
    private _idle;
    private _possibleAnimations;
    private _clock: THREE.Clock;
    private _currentlyAnimating: boolean;
    
    constructor() {
        this._currentlyAnimating = false;
    }

    public get renderer() {
        return this._renderer;
    }
    public set renderer(value) {
        this._renderer = value;
    }

    public get mixer() {
        return this._mixer;
    }
    public set mixer(value) {
        this._mixer = value;
    }

    public get idle() {
        return this._idle;
    }
    public set idle(value) {
        this._idle = value;
    }

    public get possibleAnimations() {
        return this._possibleAnimations;
    }
    public set possibleAnimations(value) {
        this._possibleAnimations = value;
    }

    public get clock() {
        return this._clock;
    }
    public set clock(value) {
        this._clock = value;
    }

    public get currentlyAnimating(): boolean {
        return this._currentlyAnimating;
    }
    public set currentlyAnimating(value: boolean) {
        this._currentlyAnimating = value;
    }

}