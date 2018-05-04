declare module "nudged" {


    export interface Matrix{
    // object o, having properties a, b, c, d, e, f:
    // [ s  -r  tx ]   [ o.a  o.c  o.e ]
    // [ r   s  ty ] = [ o.b  o.d  o.f ]
    // [ 0   0   1 ]   [  -    -    -  ]
  
        a:number;
        b:number;
        c:number;
        d:number;
        e:number;
        f:number;
    }

    export class Transform{

        static readonly EPSILON:number;
        static readonly R90:Transform;
        static readonly R180:Transform;
        static readonly R270:Transform;
        static readonly X2:Transform;

        public s:number;
        public r:number;
        public tx:number;
        public ty:number;
    
        constructor(s:number, r:number, tx:number, ty:number);

        almostEqual(t:Transform, epsilon?:number):boolean;
        equal(t:Transform):boolean;


        getMatrix():Matrix;
        transform(p:number[]):number[];
        
        getRotation():number;
        getScale():number;
        getTranslation():number;
        toArray():any[];

        inverse():Transform;
        translateBy(dx:number, dy:number):Transform;
        scaleBy(multiplier:number, pivot?:number[]):Transform;
        rotateBy(radians:number, pivot?:number[]):Transform;
        multiplyBy(transform:Transform):Transform;

    }

    export function create (scale:number, rotation:number, tx:number, ty:number): Transform;
    export function createFromArray (arr:any[]):Transform;
    export function estimate(type:string, domain:number[], range:number[], pivot?:number[]):Transform;
}

