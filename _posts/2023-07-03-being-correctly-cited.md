---
title: "Being (correctly) cited"
excerpt: "It's great being cited, it's better when people cite correctly. 

As a young academic, being cited is exciting and gratifying. It shows that my work is making an impact. While I appreciate the recognition, it's important to understand how my work is being cited and used by others. Sometimes, the citations are not entirely accurate, either in form or content, due to misunderstandings or unintentional errors.

For example, in a journal article, my bachelor's thesis was mistakenly cited as a PhD thesis. Although it made me smile, I'm still two years away from earning a PhD.

In another instance, a master's thesis claimed that the IIIF Presentation API can only be implemented alongside the Image API. However, it is not compulsory to implement the Image API to have resources compatible with the IIIF Presentation API.

In a nutshell, I wanted to clarify these points and highlight that implementing either or both APIs is possible, although implementing both is often recommended for a comprehensive IIIF implementation."
toc: true
toc_label: "Table of Contents"
categories:
  - posts
tags:
  - Citation
  - Academia
  - IIIF
date: 2023-07-03 10:25:42 +0100
---

## Being (correctly) cited

Being cited as a young academic is both exciting and gratifying. It's an acknowledgment that my work is making some impact and I've been actually cited a couple of times over the past few months.

However, as someone who is still building my academic profile, I'm always keen to understand how my work has been cited and how others have engaged with it. It's important to recognise that citations are not just about numbers; they provide insights into how one's research is perceived and used by others.

While it's encouraging to be cited, I've come across a couple of instances where the citations were not entirely accurate. In some cases, the information was not properly represented, either in terms of its form or its content. I reckon that it can happen for various reasons, such as misunderstandings or unintentional errors.

If the inaccuracies significantly undermine understanding or presentation of what I have written, I need to consider writing a respectful response or correction, and that is why I am writing this blog post.

### Type of paper/thesis

In this journal article by Branco et al. titled "Agents Based Cyber-Physical Diffused Museums Over Web Interoperability Standards"[^1], on the PDF version, I realised that my bachelor's thesis[^2] has been cited as a PhD thesis. Well, you can call me Dr. 

Of course, this makes me smile and it will be another (at least) two years before I can say I've written a PhD thesis.

### Conjunction(s)

On page 22 of Pitta's master's thesis[^3], she wrotes the following:

> The IIIF presentation API only works in combination with the Image API, since in order to implement the IIIF presentation API, institutions must implement the Image API (Raemy, 2020, p.37). Raemy confirms this since he found that all the institutions that implemented the IIIF presentation API also had implemented the Image API (Raemy, 2020, p.37).  

Although I can confirm that in the survey I carried out for Europeana as part of my master's thesis[^4], all the survey participants that mention an implementation of the [IIIF Presentation API](https://iiif.io/api/presentation) have also implemented the [IIIF Image API](https://iiif.io/api/image), it is absolutely not compulsory to implement the IIIF Image API in order to have resources (Manifests/Collections) that are compatible with the IIIF Presentation API. 

This is what I said on page 37: 

> As for the implementation, the IIIF Image API is the most deployed specification among the participants (11 occurrences: 21.2%), followed by the IIIF Presentation API (10: 19.2%) and the IIIF Content Search API (once). All institutions that have deployed the IIIF Presentation API have also deployed the IIIF Image API (both APIs are often referred to as the "IIIF core APIs"), which is expected since the latter works in conjunction with the former. 

For instance, static images or audiovisual resources (since version 3 of the IIIF Presentation API) can be painted onto a Canvas. So I'm indeed talking about a conjunction in the sense of ease of implementation. The IIIF Editors say it better as it is one of the [IIIF Design Principles](https://iiif.io/api/annex/notes/design_principles/) called "2.11. Separate Concerns, Loosely Couple APIs": 

> In the well established principle of doing one thing well, IIIF specifications should address their own area of concern and be loosely coupled rather than tightly bound together. This allows for independent implementation and tooling, and simplifies the process for deployment by adopters and API updates by the community. For example, it is possible to implement the Image API without the Presentation API and vice versa. A counter example is that the Search API is necessarily more tightly linked to the Presentation API.

Anyway, I just wanted to point out that you can implement either or both APIs, even if as a IIIF advocate, I agree that implementing both core APIs is convenient and a well-established practice in the cultural heritage field.

[^1]: Branco, D., Amato, A., Venticinque, S., & Aversa, R. (2023). Agents Based Cyber-Physical Diffused Museums Over Web Interoperability Standards. _IEEE Access, 11_, 44107–44122. [https://doi.org/10.1109/ACCESS.2023.3272641](https://doi.org/10.1109/ACCESS.2023.3272641)

[^2]: Raemy, J. A. (2017). _The International Image Interoperability Framework (IIIF): Raising awareness of the user benefits for scholarly editions_ [Bachelor’s thesis, Haute école de gestion de Genève]. [https://sonar.ch/hesso/documents/314853](https://sonar.ch/hesso/documents/314853)

[^3]: Pitta, C. P. C. (2023). _Implementing the International Image Interoperability Framework (IIIF) for accessibility and reuse of cultural heritage resources on the web – Challenges and Advantages_ [Master’s thesis, Universidade NOVA de Lisboa]. [http://hdl.handle.net/10362/154579](http://hdl.handle.net/10362/154579)

[^4]: Raemy, J. A. (2020). _Enabling better aggregation and discovery of cultural heritage content for Europeana and its partner institutions_ [Master’s thesis, HES-SO University of Applied Sciences and Arts, Haute école de gestion de Genève]. [https://sonar.ch/hesso/documents/315109](https://sonar.ch/hesso/documents/315109)