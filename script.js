// Each entry: "Name|What it is best for"
const DATA = {
  "Assistants": [
    "ChatGPT|All-round assistant for writing, analysis, coding, images and voice chat",
    "Claude|Thoughtful assistant for long documents, careful writing and coding",
    "Gemini|Google's assistant, strong with search, Workspace and multimodal input",
    "Microsoft Copilot|Assistant built into Windows, Edge and Microsoft 365",
    "Grok|Assistant from xAI with live access to posts on X",
    "Meta AI|Assistant inside WhatsApp, Instagram and Messenger",
    "Perplexity|Answer engine that cites its sources for every claim",
    "Le Chat|Fast European assistant from Mistral AI",
    "DeepSeek|Low-cost reasoning models with strong math and coding",
    "Qwen|Alibaba's multilingual models, many with open weights",
    "Pi|Friendly conversational assistant for everyday talk and advice",
    "Poe|One app to chat with many different AI models"
  ],
  "Coding": [
    "GitHub Copilot|Code suggestions and chat directly in your editor",
    "Cursor|AI-first code editor that edits across your whole project",
    "Claude Code|Terminal agent that reads, edits and tests your codebase",
    "Windsurf|AI code editor with agent-style multi-file edits",
    "Replit|Build and host apps from a prompt in the browser",
    "Lovable|Turn a description into a working web app",
    "Bolt|Generate and deploy full-stack web apps in the browser",
    "v0|Generate user interfaces and React components from text",
    "Codex|OpenAI's coding agent for tasks, reviews and pull requests",
    "Tabnine|Privacy-focused code completion for teams",
    "JetBrains AI|Assistant built into IntelliJ, PyCharm and other IDEs",
    "Devin|Autonomous software engineering agent for longer tasks"
  ],
  "Image & Design": [
    "Midjourney|Highly artistic image generation with a distinct style",
    "DALL·E|OpenAI image generation integrated in ChatGPT",
    "Stable Diffusion|Open image models you can run and customize yourself",
    "Adobe Firefly|Commercially safe image generation inside Adobe apps",
    "Ideogram|Image generation with reliable text in the picture",
    "Leonardo|Image generation for game art, concepts and product visuals",
    "FLUX|Open, high-quality image models from Black Forest Labs",
    "Canva Magic Studio|AI design, editing and writing tools in Canva",
    "Krea|Real-time image generation, upscaling and enhancement",
    "Recraft|Vector graphics, icons and brand-consistent illustrations",
    "Figma AI|Generate and refine designs and prototypes in Figma",
    "Framer|Design and publish websites with AI-assisted layouts"
  ],
  "Video": [
    "Sora|OpenAI's text-to-video model for short cinematic clips",
    "Runway|Video generation and editing tools for creators and studios",
    "Veo|Google's video model with synchronized audio",
    "Pika|Quick, playful video clips and effects from text or images",
    "Luma Dream Machine|Realistic video generation from prompts and images",
    "Kling|Long, high-quality video clips with natural motion",
    "HeyGen|Talking avatar videos with translation and lip-sync",
    "Synthesia|Training and business videos with AI presenters",
    "CapCut|Short-form video editor with auto captions and effects",
    "Descript|Edit video and podcasts by editing the transcript",
    "Opus Clip|Turn long videos into short, shareable clips",
    "Hailuo|Fast video generation with expressive motion"
  ],
  "Audio": [
    "ElevenLabs|Lifelike voices, voice cloning and dubbing",
    "Suno|Create complete songs with vocals from a text prompt",
    "Udio|Generate and refine music tracks in many genres",
    "Whisper|Accurate open speech-to-text in many languages",
    "Otter.ai|Live meeting transcripts, summaries and action items",
    "Fireflies|Records, transcribes and searches your meetings",
    "Murf|Studio-quality voiceovers for videos and presentations",
    "Krisp|Removes background noise and echo from calls",
    "Adobe Podcast|Clean up voice recordings to sound studio-grade",
    "Speechify|Listen to articles, PDFs and books read aloud"
  ],
  "Writing": [
    "Grammarly|Grammar, clarity and tone suggestions wherever you write",
    "DeepL|Natural-sounding translation and writing improvement",
    "QuillBot|Paraphrasing, summarizing and grammar checking",
    "Jasper|Marketing copy that stays on brand across a team",
    "Copy.ai|Sales and marketing content workflows",
    "Writesonic|Articles, ads and SEO content drafts",
    "Sudowrite|Fiction writing help with scenes, plots and style",
    "Wordtune|Rewrite sentences to be clearer or more fluent"
  ],
  "Productivity": [
    "Notion AI|Writes, summarizes and answers questions across your notes",
    "NotebookLM|Ask questions about your own sources and get audio overviews",
    "Gamma|Create presentations, documents and sites from a prompt",
    "Beautiful.ai|Slides that lay themselves out automatically",
    "Zapier|Connect apps and automate tasks with AI agents",
    "Make|Visual automation of multi-step workflows",
    "Reclaim|Automatically schedules tasks and habits on your calendar",
    "Motion|Plans your day and reshuffles tasks as things change",
    "Granola|Meeting notes that combine your jottings with the transcript",
    "Superhuman|Fast email with AI drafts and summaries",
    "Mem|Self-organizing notes that surface what matters",
    "Taskade|Tasks, notes and AI agents in one shared workspace"
  ],
  "Research": [
    "Elicit|Find and summarize scientific papers for literature reviews",
    "Consensus|Evidence-based answers drawn from research studies",
    "Scite|Shows whether papers support or contradict a claim",
    "You.com|AI search with customizable assistants and sources",
    "Phind|Search engine tuned for developers and technical questions",
    "ChatPDF|Ask questions about any PDF and get quick answers",
    "Humata|Find answers and summaries across long documents"
  ],
  "Business": [
    "Glean|Search and ask questions across all your company's apps",
    "Harvey|AI assistant for legal research and drafting",
    "Intercom Fin|Customer support agent that resolves tickets",
    "HubSpot Breeze|AI for marketing, sales and service in HubSpot",
    "Salesforce Agentforce|Autonomous agents for sales and service teams",
    "Clay|Enrich leads and personalize outreach at scale",
    "Gong|Analyzes sales calls to coach teams and forecast deals"
  ],
  "Platforms": [
    "Hugging Face|Hub for open models, datasets and demos",
    "Ollama|Run language models locally on your own computer",
    "LM Studio|Desktop app to download and chat with local models",
    "LangChain|Framework for building apps and agents on language models",
    "OpenRouter|One API to access many models from different providers",
    "Replicate|Run open models in the cloud through a simple API",
    "Groq|Very fast inference for open language models",
    "Together AI|Cloud platform to run and fine-tune open models"
  ]
};

// Link target for each tool (https:// is added automatically)
const URLS = {
  "ChatGPT": "chatgpt.com", "Claude": "claude.ai", "Gemini": "gemini.google.com",
  "Microsoft Copilot": "copilot.microsoft.com", "Grok": "grok.com", "Meta AI": "meta.ai",
  "Perplexity": "perplexity.ai", "Le Chat": "chat.mistral.ai", "DeepSeek": "deepseek.com",
  "Qwen": "chat.qwen.ai", "Pi": "pi.ai", "Poe": "poe.com",
  "GitHub Copilot": "github.com/features/copilot", "Cursor": "cursor.com",
  "Claude Code": "claude.com/product/claude-code", "Windsurf": "windsurf.com",
  "Replit": "replit.com", "Lovable": "lovable.dev", "Bolt": "bolt.new", "v0": "v0.dev",
  "Codex": "openai.com/codex", "Tabnine": "tabnine.com", "JetBrains AI": "jetbrains.com/ai",
  "Devin": "devin.ai", "Midjourney": "midjourney.com", "DALL·E": "openai.com/dall-e-3",
  "Stable Diffusion": "stability.ai", "Adobe Firefly": "adobe.com/products/firefly.html",
  "Ideogram": "ideogram.ai", "Leonardo": "leonardo.ai", "FLUX": "bfl.ai",
  "Canva Magic Studio": "canva.com/magic", "Krea": "krea.ai", "Recraft": "recraft.ai",
  "Figma AI": "figma.com/ai", "Framer": "framer.com", "Sora": "sora.com",
  "Runway": "runwayml.com", "Veo": "deepmind.google/models/veo", "Pika": "pika.art",
  "Luma Dream Machine": "lumalabs.ai/dream-machine", "Kling": "klingai.com",
  "HeyGen": "heygen.com", "Synthesia": "synthesia.io", "CapCut": "capcut.com",
  "Descript": "descript.com", "Opus Clip": "opus.pro", "Hailuo": "hailuoai.video",
  "ElevenLabs": "elevenlabs.io", "Suno": "suno.com", "Udio": "udio.com",
  "Whisper": "openai.com/index/whisper", "Otter.ai": "otter.ai", "Fireflies": "fireflies.ai",
  "Murf": "murf.ai", "Krisp": "krisp.ai", "Adobe Podcast": "podcast.adobe.com",
  "Speechify": "speechify.com", "Grammarly": "grammarly.com", "DeepL": "deepl.com",
  "QuillBot": "quillbot.com", "Jasper": "jasper.ai", "Copy.ai": "copy.ai",
  "Writesonic": "writesonic.com", "Sudowrite": "sudowrite.com", "Wordtune": "wordtune.com",
  "Notion AI": "notion.com/product/ai", "NotebookLM": "notebooklm.google",
  "Gamma": "gamma.app", "Beautiful.ai": "beautiful.ai", "Zapier": "zapier.com",
  "Make": "make.com", "Reclaim": "reclaim.ai", "Motion": "usemotion.com",
  "Granola": "granola.ai", "Superhuman": "superhuman.com", "Mem": "mem.ai",
  "Taskade": "taskade.com", "Elicit": "elicit.com", "Consensus": "consensus.app",
  "Scite": "scite.ai", "You.com": "you.com", "Phind": "phind.com", "ChatPDF": "chatpdf.com",
  "Humata": "humata.ai", "Glean": "glean.com", "Harvey": "harvey.ai", "Intercom Fin": "fin.ai",
  "HubSpot Breeze": "hubspot.com/products/artificial-intelligence",
  "Salesforce Agentforce": "salesforce.com/agentforce", "Clay": "clay.com", "Gong": "gong.io",
  "Hugging Face": "huggingface.co", "Ollama": "ollama.com", "LM Studio": "lmstudio.ai",
  "LangChain": "langchain.com", "OpenRouter": "openrouter.ai", "Replicate": "replicate.com",
  "Groq": "groq.com", "Together AI": "together.ai"
};

const tools = Object.entries(DATA).flatMap(([category, list]) =>
  list.map(item => {
    const [name, use] = item.split("|");
    return { name, use, category };
  })
);

const grid = document.getElementById("grid");
const search = document.getElementById("search");
const filters = document.getElementById("filters");
const count = document.getElementById("count");
const empty = document.getElementById("empty");
let activeCategory = "All";

function hue(text) {
  let h = 0;
  for (const c of text) h = (h * 31 + c.charCodeAt(0)) % 360;
  return h;
}

function render() {
  const q = search.value.trim().toLowerCase();
  const list = tools.filter(t =>
    (activeCategory === "All" || t.category === activeCategory) &&
    (`${t.name} ${t.use} ${t.category}`.toLowerCase().includes(q))
  );

  grid.innerHTML = "";
  list.forEach(t => {
    const card = document.createElement("article");
    card.className = "card";

    const badge = document.createElement("div");
    badge.className = "badge";
    badge.style.setProperty("--h", hue(t.name));
    badge.textContent = t.name[0];

    const title = document.createElement("h3");
    title.textContent = t.name;

    const cat = document.createElement("div");
    cat.className = "cat";
    cat.textContent = t.category;

    const use = document.createElement("p");
    use.textContent = t.use;

    const link = document.createElement("a");
    link.className = "link";
    link.href = "https://" + URLS[t.name];
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Visit " + t.name;
    link.setAttribute("aria-label", `Visit ${t.name} (opens in a new tab)`);

    card.append(badge, title, cat, use, link);
    grid.append(card);
  });

  count.textContent = `${list.length} of ${tools.length} tools`;
  empty.hidden = list.length > 0;
}

["All", ...Object.keys(DATA)].forEach(cat => {
  const chip = document.createElement("button");
  chip.className = "chip";
  chip.type = "button";
  chip.textContent = cat;
  chip.setAttribute("aria-pressed", cat === "All");
  chip.addEventListener("click", () => {
    activeCategory = cat;
    filters.querySelectorAll(".chip").forEach(c =>
      c.setAttribute("aria-pressed", c === chip)
    );
    render();
  });
  filters.append(chip);
});

search.addEventListener("input", render);
render();
