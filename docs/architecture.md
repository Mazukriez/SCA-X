# SCA-X Architecture

Perception → Semanticization → Cognitive State → Graph + Memory → Hypotheses → Reasoning → Candidate Plans → Simulation → Policy Gate → Action → Outcome → Experience → Memory.

The core architectural principle is that state is persistent and explicit. Reasoning should transform state rather than merely generate text.

Neural models can provide perception, extraction, translation, compression and pattern recognition. They are optional adapters, not the authoritative state store.

Planning and execution remain separate until an explicit policy gate approves an action.
