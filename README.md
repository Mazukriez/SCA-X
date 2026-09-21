# SCA-X — Semantic Cognitive Architecture Extended

> Stop predicting the next word. Start modelling the next state.

SCA-X is an open research project exploring persistent semantic state, structured memory, cognitive graphs, causal hypotheses, planning, simulation and experience-driven state transitions.

Status: Research MVP / experimental architecture

Live MVP: https://sca-x-cognitive-state-intelligence-a9a3sy.v2.appdeploy.ai/

SCA-X does not claim to replace LLMs today. The research question is whether useful AI systems can place persistent semantic state and state-transition reasoning at the center of cognition while using neural models as optional perception, extraction, translation, compression, or pattern-recognition components.

## Cognitive transition

S(t) + E(t) + G + C → H → P → A → S(t+1)

S(t) = current state; E(t) = evidence; G = goal; C = constraints; H = hypotheses; P = plans; A = action; S(t+1) = resulting state.

## Repository

core/ contains the cognitive engine. backend/ contains the HTTP adapter. src/ contains the research UI. protocols/ contains the Semantic Object Protocol. docs/ contains architecture and engineering guides. research/ contains the whitepaper, hypotheses and benchmark plan. tests/ contains automated tests. .github/ contains CI and contribution templates.

## Quick start

Requirements: Node.js 20+ and npm 10+.

    git clone https://github.com/Mazukriez/SCA-X.git
    cd SCA-X
    npm install
    npm test
    npm run dev

## Current MVP

The reference MVP demonstrates semantic state construction, entity/constraint/signal extraction, competing hypotheses, candidate plans, risk scoring, reasoning traces, experience records and optional neural semantic enrichment.

The current kernel is deliberately deterministic and transparent. It is a reference implementation, not a trained foundation model.

## Research sequence

1. Semantic Object Protocol
2. Cognitive State Graph
3. Persistent memory
4. Reasoning operators
5. State-transition algebra
6. Planning
7. Simulation
8. Experience learning
9. Benchmarks
10. Multi-agent cognition

## Contribution

Read CONTRIBUTING.md and start with a good-first-issue, help-wanted, documentation, security or research task.

## Limitation

Advantages over LLM-centric systems are hypotheses to be measured, not established claims.

## License

Apache License 2.0.
