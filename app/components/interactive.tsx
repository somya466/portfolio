"use client";

import { useState } from "react";
import { MiniIcon } from "./artwork";

const ideas = [
  {
    title: "The everyday Python helper",
    category: "Technology",
    kind: "tech",
    description: "A small script to make a repetitive task a little simpler.",
    tags: ["Python", "Problem-solving"],
    brief: "Start with a simple file organiser that previews changes before moving files. Practise reading folders, handling missing inputs, and keeping the original files safe.",
    learn: "Python fundamentals, file handling, and clear feedback",
  },
  {
    title: "A first look at public data",
    category: "Technology",
    kind: "data",
    description: "Finding the stories hidden inside a simple dataset.",
    tags: ["Python", "Data science"],
    brief: "Use an openly licensed, non-sensitive public dataset to practise cleaning rows, asking a focused question, and drawing one honest chart. Record limitations alongside the findings.",
    learn: "Python, data cleaning, and visualisation",
  },
  {
    title: "Digital rights, everyday life",
    category: "The intersection",
    kind: "law",
    description: "Exploring the questions we carry in our pockets.",
    tags: ["Digital rights", "Technology & society"],
    brief: "Build a learning journal about the questions raised by everyday technology: consent screens, online privacy, and digital identity. Use current primary sources and separate personal questions from established legal facts.",
    learn: "Legal research and technology awareness",
  },
  {
    title: "A student’s corner of the web",
    category: "Technology",
    kind: "tech",
    description: "A small website. A hands-on way to learn.",
    tags: ["HTML & CSS", "JavaScript"],
    brief: "Build a simple study-resource organiser with links, topic filters, and a mobile-friendly layout. Practise semantic HTML and keyboard accessibility before adding more features.",
    learn: "Web development and accessible interaction",
  },
  {
    title: "A little habit, a little progress",
    category: "Technology",
    kind: "data",
    description: "Visualising small daily steps with a simple habit tracker.",
    tags: ["JavaScript", "Data visualisation"],
    brief: "Build a browser-local learning tracker with daily entries, a weekly chart, and clear empty states. Add an export option so progress can be saved without an account.",
    learn: "JavaScript, local storage, and chart design",
  },
  {
    title: "Making legal knowledge findable",
    category: "The intersection",
    kind: "tech",
    description: "Could a little code make a legal glossary easier to explore?",
    tags: ["JavaScript", "Legal literacy"],
    brief: "Turn a small, source-checked legal glossary into a searchable web page. Add topic tags and clear references. Keep the project educational, with no personalised legal advice.",
    learn: "Search interfaces and responsible legal communication",
  },
];

export function Explorations() {
  const [filter, setFilter] = useState("All explorations");
  const shown = ideas.filter((idea) => filter === "All explorations" || idea.category === filter);

  return (
    <div className="explorations-body">
      <div className="filter-row" data-reveal="fade">
        <div className="filter-bar" aria-label="Filter explorations">
          {["All explorations", "Technology", "The intersection"].map((option) => (
            <button
              key={option}
              aria-pressed={filter === option}
              className={filter === option ? "filter active" : "filter"}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <p className="result-count" aria-live="polite">{shown.length} ideas to explore</p>
      </div>

      <div className="exploration-grid" key={filter}>
        {shown.map((idea) => (
          <div className="exploration-card-wrap" key={idea.title} data-reveal="up">
          <article className="exploration-card" data-tilt>
            <div className="exploration-visual" data-kind={idea.kind}>
              <div className="visual-top">
                <span className="visual-icon"><MiniIcon kind={idea.kind} /></span>
                <span>{idea.category}</span>
              </div>
              <span className="visual-symbol" aria-hidden="true">
                {idea.kind === "tech" ? "{ }" : idea.kind === "data" ? "↗" : "§"}
              </span>
              <span className="visual-index" aria-hidden="true">0{ideas.indexOf(idea) + 1}</span>
              <span className="visual-scan" aria-hidden="true" />
            </div>

            <div className="exploration-content">
              <span className="concept-label">PROJECT IDEA · NOT YET BUILT</span>
              <h2>{idea.title}</h2>
              <p>{idea.description}</p>
              <div className="tags">
                {idea.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <details>
                <summary>
                  Explore the idea <span aria-hidden="true">+</span>
                </summary>
                <div className="project-brief">
                  <p>{idea.brief}</p>
                  <strong>What I’d practise</strong>
                  <p>{idea.learn}</p>
                </div>
              </details>
            </div>
          </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactDraft() {
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const next: Record<string, string> = {};

    if (!name) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please add a valid email address.";
    if (!message) next.message = "Add a few words about what you’d like to discuss.";

    setErrors(next);

    if (Object.keys(next).length) {
      setStatus("");
      (form.elements.namedItem(Object.keys(next)[0]) as HTMLElement)?.focus();
      return;
    }

    const text = `Introduction for Shristi Kumari\n\nFrom: ${name}\nReply email: ${email}\n\n${message}\n\nPrepared locally. This message has not been sent.\n`;
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "introduction-for-shristi.txt";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus("Your introduction is ready. Check your downloads — it hasn’t been sent.");
  }

  return (
    <form className="contact-form" noValidate onSubmit={submit} data-reveal="up">
      <span className="form-corner form-corner-a" aria-hidden="true" />
      <span className="form-corner form-corner-b" aria-hidden="true" />
      <div className="form-heading">
        <span className="eyebrow">A LITTLE INTRODUCTION</span>
        <span className="form-index" aria-hidden="true">No. 01</span>
      </div>
      <h2>Start with a hello.</h2>
      <p className="form-caption">Prepare a message to share when contact details are available.</p>

      <label htmlFor="contact-name">Your name</label>
      <input
        id="contact-name"
        name="name"
        autoComplete="name"
        placeholder="What should I call you?"
        maxLength={100}
        aria-invalid={!!errors.name}
        aria-describedby={errors.name ? "name-error" : undefined}
      />
      {errors.name && <p className="field-error" id="name-error">{errors.name}</p>}

      <label htmlFor="contact-email">Your email</label>
      <input
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        maxLength={254}
        aria-invalid={!!errors.email}
        aria-describedby={errors.email ? "email-error" : undefined}
      />
      {errors.email && <p className="field-error" id="email-error">{errors.email}</p>}

      <label htmlFor="contact-message">What’s on your mind?</label>
      <textarea
        id="contact-message"
        name="message"
        rows={4}
        maxLength={4000}
        placeholder="An idea, a question, or a simple hello…"
        aria-invalid={!!errors.message}
        aria-describedby={errors.message ? "message-error" : undefined}
      />
      {errors.message && <p className="field-error" id="message-error">{errors.message}</p>}

      <button className="button primary form-submit" type="submit">
        Download introduction <span aria-hidden="true">↓</span>
      </button>
      <p className="form-caption form-footnote">Local download only. No message is sent.</p>
      <p className="form-status" role="status">{status}</p>
    </form>
  );
}
