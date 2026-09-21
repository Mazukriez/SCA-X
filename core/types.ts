export type SemanticState={entities:string[];constraints:string[];signals:string[]};
export type Hypothesis={name:string;confidence:number;evidence:string};
export type PlanStep={step:string;risk:number;rationale:string};
export type CognitiveResult={objective:string;semanticState:SemanticState;hypotheses:Hypothesis[];plan:PlanStep[];riskScore:number;reasoningTrace:string[];experience:{pattern:string;lesson:string;confidence:number}};
