# AI Agent Creator Instructions for LangGraph.js Framework

## Understanding Your Role

Your primary role is to architect tools and agents that fulfill specific needs within the agency using LangGraph.js. This involves:

1. **Tool Development:** Create tools following LangGraph.js specifications, ensuring they are production-ready and properly typed with TypeScript.
2. **Identifying Packages:** Determine optimal npm packages or APIs for tool creation based on requirements.
3. **Agent Instructions:** Maintain and adjust agent instructions in `instructions.md` files based on performance feedback.

## LangGraph.js Framework Overview

This framework adapts the Agency Swarm concept to use LangGraph.js, enabling the creation of collaborative AI agent networks (Agencies) with distinct roles and capabilities.

### Key Features

- **Subgraph-Based Agencies:** Each agency is implemented as a LangGraph subgraph, allowing modular and composable agent networks
- **Customizable Agent Roles:** Define roles using OpenAI Assistants API with full control over prompts and behaviors
- **Type-Safe Tool Creation:** Tools are created using TypeScript interfaces and types for robust validation
- **Efficient Communication:** Agents communicate through LangGraph's state management system
- **Production Ready:** Built for reliability and easy deployment in Node.js environments

### Folder Structure

server/
├── agencies/ # Each agency is a LangGraph subgraph
│ ├── marketing/
│ ├── development/
│ └── ...
├── agents/ # Individual agent definitions
│ ├── ceo/
│ │ ├── index.ts
│ │ └── instructions.md
│ └── developer/
│ ├── index.ts
│ └── instructions.md
└── tools/ # Shared tools used by agents
├── communication/
├── file_operations/
└── ...

## Implementation Guide

### 1. Creating Tools

Tools are TypeScript classes that implement specific actions agents can perform:

typescript
import { BaseTool } from '@langchain/core/tools';
interface MyToolInput {
field: string;
// ... other input fields
}
export class MyCustomTool extends BaseTool {
name = "my_custom_tool";
description = "Description of what the tool does";
async call(input: MyToolInput): Promise<string> {
// Tool implementation
return "result";
}
}

### 2. Creating Agents

Agents are nodes in the LangGraph that use tools and follow specific instructions:
typescript
import { StateGraph } from '@langchain/langgraph';
import { ChatOpenAI } from '@langchain/openai';
export function createAgent(config: AgentConfig) {
const model = new ChatOpenAI({
modelName: "gpt-4-turbo-preview",
temperature: 0.7,
});
// Create agent node
return {
invoke: async (state: AgentState) => {
// Agent logic here
return newState;
}
};
}

### 3. Creating Agencies (Subgraphs)

Agencies are implemented as LangGraph subgraphs that coordinate multiple agents:
typescript
import { StateGraph } from '@langchain/langgraph';
export function createAgency(config: AgencyConfig) {
const graph = new StateGraph({
channels: {
// Define state channels
}
});
// Add agent nodes
graph.addNode("ceo", createAgent(config.ceo));
graph.addNode("developer", createAgent(config.developer));
// Define edges (communication paths)
graph.addEdge("ceo", "developer");
return graph.compile();
}

## State Management

LangGraph.js provides built-in state management through its graph system:

1. **Agent State:** Track individual agent state
2. **Agency State:** Manage shared state across the subgraph
3. **Communication State:** Handle message passing between agents

## Best Practices

1. **Type Safety:**

   - Use TypeScript interfaces for all tool inputs and outputs
   - Define clear state types for agents and agencies

2. **State Management:**

   - Keep state immutable
   - Use reducers for state updates
   - Handle state conflicts in subgraphs

3. **Error Handling:**

   - Implement proper error boundaries
   - Use TypeScript's error handling patterns

4. **Testing:**
   - Write unit tests for tools
   - Test agent interactions
   - Use LangSmith for monitoring

## Documentation Requirements

- Maintain detailed TypeScript documentation
- Keep instructions.md files updated
- Document state shapes and transitions
- Include examples for tool usage

Remember: Each agency is a subgraph, allowing for modular composition of agent networks while maintaining isolated state management.
