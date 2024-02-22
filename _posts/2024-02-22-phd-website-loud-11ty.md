---
title: "PhD Website: LOUD for Cultural Heritage – now running with 11ty"
excerpt: "I have redesigned my PhD Website – Linked Open Usable Data for Cultural Heritage (https://phd.julsraemy.ch) – with 11ty, a static site generator, instead of Omeka S."
toc: true
toc_label: "Table of Contents"
categories:
  - posts
tags:
  - PhD
  - Cultural Heritage
  - LOUD
  - IIIF
  - Linked Art
  - 11ty
  - Omeka S
date: 2024-02-22 12:50:28 +0100
link: https://phd.julsraemy.ch
---

## Redesigning the PhD Website with 11ty

The choice of technology platforms for presenting research can have a profound impact on the accessibility and engagement of scholarly work. For my PhD - [Linked Open Usable Data for Cultural Heritage](https://phd.julsraemy.ch) - I embarked on a journey to rethink how my research could be presented online. The result is a shift from using [Omeka S](https://omeka.org/s/), a popular choice in the cultural heritage sector, to adopting [11ty](https://www.11ty.dev/), a modern static site generator. 

### Why Moving Away from Omeka S?

Omeka S, an open source publishing platform,  has been a staple in the GLAM (galleries, libraries, archives, and museums) sector for its robustness in handling digital exhibitions and collections. Initially, one of my goals was to have an application programming interface (API) alongside the user interface to facilitate access to the research data. Omeka S provides facilities for such integration, but as my project evolved I realised the potential and flexibility of generating JSON-LD, for potential Linked Art API endpoints, files statically. However, as the needs of my project evolved, I sought more flexibility and control over the presentation and management of my content. The need for a lightweight, customisable platform became obvious. The focus shifted to creating a more flexible, efficient and straightforward solution that could still meet the project's goals without the overhead of maintaining a server-side API.

### The Appeal of 11ty

The decision to use Eleventy (11ty) as the basis for my PhD website was driven by its simplicity, speed and flexibility. 11ty stands out for its minimalist approach to static site creation, prioritising performance and developer experience. Unlike traditional content management systems, which often come with a steep learning curve and bloated features, 11ty offers a streamlined, straightforward development process. One of the key advantages of 11ty is its flexibility in handling different types of input files - Markdown, HTML, Nunjucks and more - allowing for a highly adaptable content structure. 

11ty's build process is fairly efficient, resulting in fast-loading pages that improve site accessibility and user engagement. Its support for modern web development practices, including seamless integration with various front-end tools and pre-processors.

### Hosting the PhD Thesis as HTML

One of the main motivations for this technological pivot was the desire to host [my thesis as HTML on the site](https://phd.julsraemy.ch/thesis) - which will hopefully be accessible by 2025, as this facilitates the integration of multimedia elements, interactive visualisations and direct links to digital artefacts and datasets, such as embedding IIIF resources in compatible viewers.

### Around the PhD

The redesigned website also serves as a platform to highlight the broader aspects of my research, including the concept of [Linked Open Usable Data (LOUD)](https://phd.julsraemy.ch/loud), the related [research outcomes](https://phd.julsraemy.ch/research), as well as the [PIA research project](https://phd.julsraemy.ch/pia). 