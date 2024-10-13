
import "web-streams-polyfill/polyfill";
import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";


const model = new ChatOpenAI({
  model: "gpt-4",
 
});

// new HumanMessage("hi!"),
const messages = [
  new HumanMessage("你好，请问1+1是多少"),
];

const parser = new StringOutputParser();
const chain = model.pipe(parser);

// console.log(chain)

const result = await chain.invoke(messages);
console.log(result);
// LCEL: langchain expression language


// const res = await model.call(
//   "What's a good idea for an application to build with GPT-3?"
// );
export {}

// console.log(res);
