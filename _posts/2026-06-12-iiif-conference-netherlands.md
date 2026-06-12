---
title: "My First Decade in the IIIF Community — Highlights and Reflections from the 2026 Annual Conference in the Netherlands"
excerpt: "The 2026 International Image Interoperability Framework (IIIF) Conference took place during the first week of June across three Dutch cities: Amsterdam, Leiden, and The Hague. I came away with plenty of notes and a few things I want to talk through, made all the more meaningful by a small coincidence: this also marks ten years of my involvement in the IIIF community, which began at a working groups meeting in The Hague."
toc: true
toc_label: "Table of Contents"
categories:
  - posts
tags:
  - 3D
  - API
  - Community
  - IIIF
  - Cultural Heritage
date: 2026-06-12 10:42:42 +0100
---

## My First Decade in the IIIF Community — Highlights and Reflections from the 2026 Annual Conference in the Netherlands

In October 2016, I attended the [Working Goups Meeting](https://iiif.io/event/2016/thehague/) in The Hague and I still have very fond memories of my first International Image Interoperability Framework (IIIF – pronounced 'triple-eye-eff') event. I am proud to say that I made some friends there. I must say that it was quite challenging to understand everything, but it was an eye-opener. 

![My first message on the IIIF Slack workspace](https://julsraemy.ch//assets/2016-iiifslack-firstmessage.png)
*Yes, in case you were wondering, a few people did reply to my first message on Slack.*

---

For anyone landing here as bewildered as I was back then, here's IIIF in a nutshell:

> The [International Image Interoperability Framework](https://iiif.io) (IIIF) is a set of open standards for delivering high-quality, attributed digital objects online at scale. It is also an international community developing and maintaining those APIs, supported by a consortium (IIIF-C) of leading cultural institutions. IIIF emerged from a practical need among galleries, libraries, archives, and museums: how to present high-resolution images and time-based media in ways that function reliably across institutions, tools, and audiences.

The passage above is from a forthcoming IIIF / WikiBlueprint: IIIF Consortium, & Orlowitz, J. (2026). *Zooming out: Can we integrate IIIF and Wikimedia?* Zenodo. <https://doi.org/10.5281/zenodo.20038883>

---

Ten years later, I'm still involved in this incredible community, and I'm back in the Netherlands for the annual conference, which took place in three Dutch cities from 1 to 4 June. As in previous years, the [2026 IIIF Conference](https://conference2026.iiif.io/) comprised the following: on Monday, a showcase — a free event primarily intended for newcomers — took place in Amsterdam. The annual conference itself was held in Leiden on Tuesday and Wednesday, while the workshops and Birds of a Feather sessions were located in The Hague on Thursday. Around 220 people from 30 countries registered for this four-day event (*for a few people, it's the whole week as formal IIIF-C and informal or adjacent meetings also take place*). 

There's a small decision I wrestle with at every conference: do I live-toot the sessions (*RIP Twitter account*, a habit I never fully transplanted to Mastodon) or do I keep my head down and take proper notes? This time I went with notes, which is also why this write-up exists at all. The last time I did this exercise was two years ago, for the [2024 IIIF Conference in Los Angeles](https://julsraemy.ch/posts/2024/06/26/iiif-conference-la/). As ever, the talks from the conference (Tuesday and Wednesday) were recorded and are available as a [playlist on YouTube](https://www.youtube.com/watch?v=_0otBi4jpJg&list=PLYPP1-8uH9c6e7BmQlEb4wTtqD513wYZA), so anything I missed, and on Wednesday there was a fair amount, can be caught up on later (*one grumble: I am a little bit disappointed by the quality of the video recodings of talks that took place in the Theaterzaal (the vast majority), the recordings done in the Expo 1 room looks great though!*).
 
### News from the community
 
A couple of things worth flagging before the talks themselves:
 
- The alpha draft (release candidate) of the [IIIF Presentation API 4.0](https://iiif.io/api/presentation/4.0/) has been released. This specification introduces new Container classes, adding audio Timelines and 3D Scenes to Canvas, new accessibility features in the form of the `provides` property, user interactivity over Manifest content, and deep support for 3D assets and composed Scenes (note: *I shamelessly stole this sentence from Julie Winchester, one of the editors, on Slack*). The editors welcome implementation reports and issues — preferably on [GitHub](https://github.com/IIIF/api/issues), but also through the 3D or technical channels on the [IIIF Slack workspace](http://bit.ly/iiif-slack), or via the [iiif-discuss](https://groups.google.com/g/iiif-discuss) mailing list. There are already a few V4 cookbook recipes, available on the [preview site](https://preview.iiif.io/cookbook/v4/).
- The [Coordinating Committee (CoCo)](https://iiif.io/community/coordinating-committee/) is becoming the **Community Committee** (still CoCo), a change which will soon be reflected on the IIIF website, and is working more as a conduit between IIIF-C and the community than before. Its new remit is to act as a sounding board, assessing proposals for new [community and technical specification groups](https://iiif.io/community/groups/), advising on strategic planning and communication across IIIF groups and strategies for diverse representation within the community, periodically evaluating IIIF's communication tools and platforms, and helping to ensure the health and sustainability of Community Groups, including reviewing changes to their charters. CoCo is also responsible for providing more direct support to the community, such as joining event Programme Committees as required, providing feedback on the successes and challenges of IIIF events, conferences and working meetings, and overseeing the IIIF [Code of Conduct](https://iiif.io/event/conduct/). I have been a member since May 2020 and will continue to be so for the next couple of years (terms now last either two or three years).
- A short video was shown from the new IIIF Accessibility and Usability Community Group who presented the IIIF Idea Box where people (end users and developers) can fill in [a form](https://ywgw34r8.forms.app/iiif-idea-box-form) to share their ideas, needs, and challenges with IIIF implementation, and where developers can engage with those submissions through a Kanban board to discuss, claim, and prototype solutions. To be noted: there was a [dedicated community call](https://www.youtube.com/watch?v=IvOZV86wM5g) in May on this subject. 

What follows focuses mostly on the presentations and lightning talks on Tuesday 2 and Wednesday 3 June at the Scheltema in Leiden, plus the Birds of a Feather session on bot management in The Hague on Thursday.
 
### Monday: the Showcase in Amsterdam
 
The week opened at the Tolhuistuin in Amsterdam with the Showcase, the gentle on-ramp for newcomers: an introduction to IIIF by Bob Coret and Caitlin Perry, an [Allmaps](https://allmaps.org/) demo from Bert Spaan and Jules Schoonman, a discovery session from the Rijksmuseum who implemented the [IIIF Change Discovery API 1.0](https://iiif.io/api/discovery/1.0/) - see <https://data.rijksmuseum.nl/docs/iiif/cd>, some slow looking in the [Imaginarium](https://imaginarium.nationalgallery.org.uk/) with [Micrio](https://micr.io/), [IMMARKUS](https://rainersimon.io/portfolio/immarkus/) presented by KU Leuven, and a museum-image-collections talk from [Axiell](https://www.axiell.com/) — followed by a hands-on IMMARKUS workshop. A good reminder that the community keeps investing in the people arriving rather than only the people already here.

In the evening, there was a welcome drinks gathering in Leiden – a great opportunity to network and catch up with everyone before the busy days ahead on Tuesday and Wednesday. 

![Strolling through beautiful Leiden](https://julsraemy.ch/assets/images/2026iiif-leiden.jpg)
*Strolling through beautiful Leiden*
 
### Tuesday: a full day of plenaries in Leiden
 
The conference proper opened in the Theaterzaal of the Scheltema with a welcome from Geertrui Verbraak (Director of the KB, the national library, and chair of the Dutch Digital Heritage Network / NDE) and a plenary from Martin Kalfatovic, Glen Robson, and Caitlin Perry who gave us an update on the community and the consortium (such as the release candidate of the IIIF Presentation API 4.0, IIIF Coco, and the IIIF Idea Box). Tuesday ran as a single track all day, which made it the most "everyone in one room" day of the week.
 
#### Commons, commons everywhere
 
The opening pair set a clear theme. Martin Kalfatovic (IIIF-C) and Tom Cramer (Stanford) made the case for a [**IIIF Content Commons**](https://iiif.io/community/groups/) — the idea that IIIF has been wildly successful at *publishing* content but still lacks a broadly adopted mechanism to *connect* it for discovery, aggregation, and reuse. The framing I liked best was the nod to Elinor Ostrom: moving from a "tragedy of the commons" to "let's actually govern the commons," i.e. the difficult shift from independent, self-interested publishing to coordinated, collective action. Things like maps.iiif.io, Biblissima, the Digital Library of the Middle East, and Europeana are already doing this in their own corners.
 
That dovetailed straight into Jules Schoonman (TU Delft / Allmaps) and Bert Spaan (Allmaps) presenting the [**Allmaps**](https://allmaps.org/) consortium partnership (formed in November 2025) and a vision for a **IIIF Maps Commons**: a shared discovery layer for georeferenced maps across institutions. Allmaps stores only georeference data, never image derivatives, and the roadmap includes Allmaps Curator and Allmaps Explore, plus a reworked [API and documentation](https://annotations.allmaps.org/docs).

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/_0otBi4jpJg?si=ZBQM4Gl1V7Qp7_vY"
    title="2026 IIIF Annual Conference Day 1 Part 1"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>
</div>
  
*2026 IIIF Annual Conference Day 1 Part 1*
 
#### AI and machine learning take the main stage
 
The next block leaned hard into AI/ML enrichment, which was one of dominant threads of the whole conference.
 
Matthew McGrattan (Digirati) showed how the [IIIF Manifest Editor](https://manifest-editor-docs.netlify.app/) can be an on-ramp for AI/ML enrichment — a "Create Text" button that runs a lightweight classifier client-side in the browser (no expensive GPUs), with a "smart router" that falls back to a larger or more specialised model when quality demands it, storing outputs as adjuncts in IIIF Cloud Services. 

Linnéa Karlberg Lundin (Swedish National Archives) presented HTR and IIIF *at scale*: their open-source [Swedish Lion](https://huggingface.co/Riksarkivet/trocr-base-handwritten-hist-swe-2) model and HTRFlow pipeline have made millions of handwritten images searchable through the [National Archives Database](https://sok.riksarkivet.se/), side-by-side with the original images in the Universal Viewer — and they've even built an MCP server ([RA-MCP](https://huggingface.co/spaces/Riksarkivet/ra-mcp)) so you can explore the archives in any language without knowing archival terminology.
 
Then Ben and Sara Brumfeld ([FromThePage](https://fromthepage.com/)) made the bold claim that with Gemini 3, "one of the hardest problems in digital humanities" — transcribing handwriting without hallucinations — is now largely solved. Their numbers were striking: after adding AI drafts, pages transcribed roughly tripled, and they take pains to keep the provenance transparent (a robot icon on AI drafts, model and usage exposed via the `seeAlso` property). 

The block closed with Marlo Longley (Stanford) on [**Viewing IIIF through Mirador 4**](https://projectmirador.org/) — the long-awaited release shipped in October 2025, much of the work going into software sustainability (dependency and framework modernisation), with a live demo of a small Stanford analytics plugin showing off Mirador's real strength: extensibility.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/JWTllYmmPME?si=lDeBIx4WEBi4ejxn"
    title="2026 IIIF Annual Conference Day 1 Part 2"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>
</div>

*2026 IIIF Annual Conference Day 1 Part 2*
 
#### The Johnson Publishing and Apocalypse presentations, then a poster lightning round
 
After lunch, the afternoon presentation block opened with two full talks. David Newbury (Getty) and Andrew Gunther (Smithsonian) walked through the [Johnson Publishing Company Archive](https://libguides.getty.edu/jpcarchive/about) — the photo archive behind *Ebony* and *Jet*, over four million photographs documenting American life from a Black perspective, jointly stewarded by Getty and the National Museum of African American History and Culture. IIIF is the bridge between two institutional infrastructures (digitisation and DAM on the Smithsonian side, metadata and access on the Getty side), and the collaboration pushed Smithsonian toward "IIIF-first" and built out highly accessible IIIF V3 audio and video. 

Anne McLaughlin (Trinity College, Cambridge) followed with *[Preserving the Apocalypse](https://bit.ly/IIIF-apocalypse)* — three centuries of copying a single manuscript, from glass plates and microfilm to deluxe facsimiles, a lovely meditation on "lots of copies keep stuff safe" long before anything was digital.
 
The block then handed off to a **lightning round of poster presentations**, a first for the conference (more on that below). The posters: the [DOMI](https://ait.co.at/en/domi-2/) project bringing Styrian archaeology into IIIF Presentation API v4 with 3D; Ursula Loosli (University of Bern) on sustainability as an *organisational and human* problem, not just a technical one (data stewards coordinating people, roles, and responsibilities, see their great [IIIF service](https://www.dh.unibe.ch/services/iiif_service_for_images/index_eng.html)); the [mirador-xyviewer](https://github.com/CRC-Centre-Recherche-Conservation/mirador-xyviewer) plugin pulling physicochemical data (Raman, FTIR, XRF) into Mirador 4; [Spatial Anchors](https://necessaryreunions.org/) for annotating and georeferencing historical maps via the [IIIF Georeference Extension](https://iiif.io/api/extension/georef/); the [INTERIM-Annotator](http://w3id.org/interim) for semantic, intermedial annotation built on CIDOC-CRM and LRMoo; and Marina Sartori (Hamburg) on intermedial echoes in ancient Egyptian manuscripts.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/TOTGk3sT1Tw?si=X4YHYU60aT-b7cEv"
    title="2026 IIIF Annual Conference Day 1 Part 3"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>
</div>

*2026 IIIF Annual Conference Day 1 Part 3*

![Poster Presentation by Ursula Loosli (University of Bern): Sustainability in the context of IIIF that goes beyond technique](https://julsraemy.ch/assets/images/2026iiif-unibe.jpg)
*Ursula Loosli (University of Bern) presenting her poster. Yes, I unsuprisingly took this picture as I am affiliated with this institution as an associate researcher.*


#### Lightning talks
 
Tuesday closed with a fast lightning round: the National Gallery's *Mark Once, Link Everywhere*, using IIIF annotations as anchors to link tiny paint-sample locations to Linked Data research records in [ResearchSpace](https://www.researchspace.org/); Rama Mwinyimbegu (Leiden University Libraries) "talking to an annotation" — and then, by surprise demo, "talking to an image" — via a semantic-search Mirador plugin using local embeddings for data sovereignty; Albin Larsson (Swedish National Archives) on [CODICUM](https://codicum.eu/) and *planning for the end*, treating IIIF's decentralisation as a necessity rather than a nice-to-have for surviving the end of project funding; [CommonsDB](https://registry.commonsdb.org/explorer) building a registry of public-domain and openly licensed assets (over 5M declarations by June 2026), which ties neatly back to the Content Commons idea; John Moore (The National Archives, UK) on IIIF-in-a-Box, a lightweight, self-contained, git-backed IIIF environment with one eye firmly on bot-driven harvesting; Derek Lomas on [SourceLibrary.org](https://sourcelibrary.org/), which ingests books from 13+ providers via IIIF and runs them through Gemini OCR and translation — "IIIF's interoperability promise is transformative when the consumer is an AI model"; and George Oates on [KeepRight](https://keepright.info/), a protocol for expressing *preservation intentions* (keep-right, copy-right, machine-right) that copyright frameworks say nothing about, [integrating with IIIF through `seeAlso`](https://keepright.info/integrating#iiif).

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/T9jwWQWteTc?si=BS0gqiA_PNH1m-po"
    title="2026 IIIF Annual Conference Day 1 Part 4"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>
</div>

*2026 IIIF Annual Conference Day 1 Part 4*
 
A first this year: the poster session was run as a lightning round, which I thought worked well — and it's good for inclusion, since presenting something (a poster, a Birds of a Feather, a workshop) is how many people justify attending in the first place.

In the evening, an official reception was held at [Naturalis](https://www.naturalis.nl/en), giving some attendees the chance to take photos of dinosaurs (through a window; the only ‘dinosaur’ close by was the stuffed one in the gift shop). 
 
### Wednesday: parallel tracks, and some room-hopping
 
Wednesday split into two parallel tracks for the morning — the Theaterzaal and Expo 1 running simultaneously — before merging back into a single track after lunch. I made no attempt to stay loyal to one room: I followed the talks, which meant Expo 1 for the first slot and then crossing to the Theaterzaal for the second. The honest consequence is that I missed half of Wednesday morning, and I'm relying on the recordings for the rest.
 
#### What I caught
 
##### Interactive 2D, Micrio, Glycerine

In the first slot (Expo 1), Theresa Berger and Emily Beck (Minnesota) presented the [**Interactive 2D**](https://iiif.io/community/groups/2D/) Community Group's work — volvelles, flaps, pull-tabs, harlequinades: the objects where *the meaning is in the interactivity*, and where IIIF is already inching forward through cookbook recipes like [Choice](https://iiif.io/api/cookbook/recipe/0033-choice/) and [Foldouts, Flaps, and Maps](https://iiif.io/api/cookbook/recipe/0035-foldouts/) - *see below this cookbook recipe in the Theseus viewer*. Then Erwin Verbruggen and Marcel Duin (Q42) told the story of [**Micrio**](https://micr.io/) from project to subscription venture to (as of 2025) an open-source IIIF image viewer with great demonstrations (such as the [360º Vermeer Exhibition](https://www.rijksmuseum.nl/en/vermeer-360) or [Modemuze: Fashion Objects in Ultra-Resolution 3D](https://modemuze.nl/360-collection)) from an eclectic user base spanning museums, broadcasters, NGOs, and political parties. And Ian McCrabb (Systemik Solutions) showed [**Glycerine**](https://glycerine.io/)'s Annotation Sets and Templates: multiple coexisting interpretive layers, authored and published from a single manifest without duplication.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/685mCXutKhs?si=pUXAPsxbA2KZm79Z"
    title="2026 IIIF Annual Conference Day 2, Track B, Part 1"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>
</div>

*2026 IIIF Annual Conference Day 2, Track B, Part 1*


<div style="position: relative; width: 100%; padding-top: 56.25%; /* 16:9 ratio */">
  <iframe
    src="https://theseusviewer.org/embed?iiif-content=https%3A%2F%2Fiiif.io%2Fapi%2Fcookbook%2Frecipe%2F0035-foldouts%2Fmanifest.json"
    title="Theseus Viewer"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
  ></iframe>
</div>

*Outlines of geology being the substance of a course of lectures delivered in the Theatre of the Royal Institution in the year 1816, Foldouts, Flaps, and Maps Cookbook Recipe, <https://iiif.io/api/cookbook/recipe/0035-foldouts/manifest.json> in the Theseus Viewer*

##### Image Server Benchmarkings, Getty Manifest Generation Pipeline, IIIF and Digital Preservation

For the second slot I crossed to the Theaterzaal, which turned out to be the most technical stretch of the conference in my opinion. Ruven Pillay (C2RMF / French Ministry of Culture) delivered a genuinely meaty benchmark of IIIF image server performance — the kind of talk I take pages of notes on. A few of the findings worth keeping: IIIF serving is very disk-read dependent (and S3 is popular but slow for random access); Docker carries roughly a 60% performance penalty over bare metal; uncompressed tiled multi-resolution pyramid TIFF is by far the fastest input format (using JPEG as input was ~300× slower to decode); and across servers, [iipsrv](https://iipimage.sourceforge.io/) came out fastest for all formats tested, with SIPI surprisingly slow for TIFF. The next IIPImage release (v1.4, late 2026) will add JPEG-XL output. Matthew Yang (University of Chicago) arrived at a compatible conclusion in *Serving Images Hot*: for [UChicagoNode](https://www.lib.uchicago.edu/), FreeBSD with iipsrv and uncompressed pyramidal TIFF, with the takeaway that compression is a *storage* decision while server choice drives *rendering*. Two independent benchmarks landing on (almost I rekcon) the same stack is about as close to community consensus as you get.
 
The slot finished with Getty again — Elena Mujal, Dan Brennan, and Sebastien Siclait on *From Three to One*, consolidating three separate manifest-generation pipelines into a common output, with CIDOC-CRM/[Linked Art](https://linked.art/) Human-Made Objects (HMOs) and a manifest-first ("Presentation API first") image viewer used across all their portals — and Tom Crane (Digirati) on *Making digital preservation IIIF-ready*: a clever argument for building preservation (METS, OCFL on Fedora) with future IIIF-ness in mind, even creating *ephemeral* IIIF representations purely to borrow the modern tooling ecosystem (Range editors, Canvas builders) before round-tripping back to METS. Both of those I've tagged for follow-up at work.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/32h3_Z8lqyk?si=3TQGPAx0J1xoBZZy"
    title="2026 IIIF Annual Conference Day 2, Track A, Part 2"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>
</div>

*2026 IIIF Annual Conference Day 2, Track A, Part 2*
 
#### Meanwhile, in the other room
 
Because I was in the opposite track, I owe these only a short mention until I've watched them back: in the Theaterzaal first slot, [Wolpi](https://github.com/dbmdz/wolpi), an extensible IIIF Image API server from the Bavarian State Library (JVM + libvips); a custom visual structure editor for IIIF Ranges from Notch8 and Yale; and [aiiinotate](https://github.com/Aikon-platform/aiiinotate), a fast, scalable annotation server benchmarked at up to 100 million annotations. 


<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/Ct50LS6Pq3I?si=-HJfI_2XwTWS0R70"
    title="2026 IIIF Annual Conference Day 2, Track A, Part 1"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>
</div>

*2026 IIIF Annual Conference Day 2, Track A, Part 1*

In Expo 1's second slot, the Accademia di San Luca rebuilt on [Canopy IIIF](https://github.com/canopy-iiif) as "minimal computing, maximum interoperability"; a Korea National University of Heritage talk on IIIF + 3D semantics + generative AI; Caterina Agostini (Indiana) on integrating IIIF, TEI, and AI-based watermark recognition for the [Chymistry of Isaac Newton](https://webapp1.dlib.indiana.edu/newton/); and Leiden University Libraries on an "Endpoint" indirection layer that keeps manifest URLs stable across repository migrations — a problem I suspect a lot of us will face.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/CiUsvn9NNzA?si=r2t-pnY0T7LUhsCB"
    title="2026 IIIF Annual Conference Day 2, Track B, Part 2"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>
</div>

*2026 IIIF Annual Conference Day 2, Track B, Part 2*
 
#### Afternoon: back to a single track
 
After lunch we reconvened in the Theaterzaal. Garrett Nelson (Leventhal Map & Education Center, Boston Public Library) gave my favourite "so what" talk of the afternoon — *After Georeferencing* — arguing that layering historical maps on a modern basemap isn't always the right move (it can actively degrade a weird-but-wonderful original), and offering six richer uses for georeferenced collections: control points as pedagogy, collections-upon-collections, maps as discovery devices for *other* collections, narrative and storytelling, warping the data instead of the map, and map collections as big datasets.
 
Then: Leila Iñigo de la Cruz on [**IIIF for researchers in the natural and engineering sciences**](https://data.4tu.nl/) at 4TU.ResearchData — IIIF as an interoperability layer for scientific imagery rather than collection curation, in service of FAIR principles. IIIF reaching beyond the GLAM sector is something I'd like to see more of. The V&A's Zoë Hollingworth and Richard Palmer closed out the manifest-automation thread with *One System After Another*, a pragmatic story of co-designing DAMS sequencing so that generating manifests stops being a manual, error-prone chore. And Mario Van Assche and Ilya Dierckens (KANTL) presented a [scholarly variants edition of Gilliams' *Elias*](https://edities.kantl.be/gilliams), aligning TEI-XML with IIIF annotations so that selecting a textual variant highlights its exact spot on the facsimile — IIIF as dynamic scholarly infrastructure rather than just an image layer.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/Dlw01R0Bs3I?si=El6f9MBvT0GcbLOl"
    title="2026 IIIF Annual Conference Day 2, Part 3"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>
</div>

*2026 IIIF Annual Conference Day 2, Part 3*
 
#### Closing lightning talks and "Fun without I"
 
The final lightning round is where the conference's human and ethical dimension came through most strongly. Marina Sartori returned with *Miniature Monuments* (the lightning-talk companion to her poster). Fredrick Otike (Dedan Kimathi University of Technology, Kenya) spoke on **ethical access for sensitive African collections** — sacred knowledge, colonial-era photographs taken without meaningful consent, community-restricted oral histories, marginalised histories — and the question of how IIIF might embed *ethical protections*, not just access. Leo Andersen (Queer Asian Museum) followed with *Preserve, Participate, Pass On: Community-Led, AI-Assisted IIIF Archives in Shrinking Civic Spaces*, on building survivable, consent-aware archives for dispersed communities (the Beijing LGBT Center, a space that no longer exists), where AI transcription and translation make a one-person archive feasible and the obstacle is political rather than technical. The line I wrote down and underlined: *interoperability is a framework of defiance — we are boldly everywhere.* Sebastien Siclait (Getty) then made his second appearance with *Movies to Museums*, importing lessons from 3D entertainment technology into heritage; and Neil Hawkins (Cogapp) demoed a small, browser-runnable model for [automatically removing colour-correction bars](https://crop.labs.cogapp.com/) — IIIF in, IIIF out.

![Interoperability is a framework of defiance. We are boldly everywhere.](https://julsraemy.ch/assets/images/2026iiif-defiance.jpg)

And then, as tradition demands, Tristan Roddis (Cogapp) closed the conference — except this year the joke was in the title itself: [**Fun without I**](https://docs.google.com/presentation/d/1HbLAY9p72dC-JK5YDoLten3fCbrfzOjroPi0b40nTnI/edit). IIIF minus the second *I*: fun *without images*, his self-imposed challenge being to feature only projects involving the passage of time or the third dimension — the new territory Presentation API 4.0 opens up. The tour: Trey Pendragon's page-flipping [cozy reader](https://tpendragon.github.io/cozy-reader/?manifest=https://figgy.princeton.edu/concern/scanned_resources/35936aa0-30ba-4438-b463-e005dc80682c/manifest); Steve Norris's [EAP Easter egg](https://eap.bl.uk/item/CEAP468-3-5-305) (open the page and hold down H, M and V); Mat Jordan's [Muybridge in Motion](https://nulib-ds.github.io/muybridge/index.html), built on Trip Kirkpatrick's [resources-on-a-timeline cookbook recipe](https://iiif.io/api/cookbook/recipe/0560-resources-on-a-timeline/); [AV Annotate](https://av-annotate.org/) from Tanya Clement and Brumfield Labs; Patrick Cuba's [stereograph viewer](https://cubap.github.io/stereographer/) ([source](https://github.com/cubap/stereographer)), alongside [David Newbury's take](https://stereograph.davidnewbury.com/) on the same idea; Tristan's own [transcript karaoke](https://cogapplabs.github.io/transcript-karaoke/) ([source](https://github.com/CogappLabs/transcript-karaoke)); Matthias Müller-Prove's [anamorphic skull](https://mprove.de/chrono3d?q=-0.18386,-0.09503&z=7.98&m=IFholbein&s=1&iiif-content=https://storiiies.cogapp.com/holbein/manifest.json), surfacing the hidden memento mori in Holbein's *The Ambassadors*; Julie Winchester's [Fiiinal Frontier](https://juliewinchester.github.io/fiiinal-frontier/); a donut tour of an [Emily Dickinson daguerreotype](https://acdc.amherst.edu/view/EmilyDickinson/ed0889); and Luke Watson-Davies's [3D-iiify](https://3d-iiify.vercel.app) ([source](https://github.com/CogappLabs/3d-iiify)), an unofficial extension of the v4 spec. He also left links to a few he'd shown in past years: [FunK with IIIF](https://cogapplabs.github.io/funk-with-iiif), the [3D trade cards explorer](http://labs.cogapp.com/tc/), and — closing a nice loop with Wednesday — Garrett Nelson's [MovieMaps](https://www.leventhalmap.org/articles/roll-the-tape-with-moviemaps/), from the same person behind that morning's *After Georeferencing* talk.

<iframe
  src="https://cogapplabs.github.io/transcript-karaoke/"
  title="Transcript karaoke — Mirador with the karaoke plugin (Neue Mannigfaltigkeiten, BSB)"
  width="100%"
  height="600"
  style="border: 1px solid #ddd; max-width: 100%;"
  loading="lazy"
  allowfullscreen></iframe>

*Tristan's "transcript karaoke" in action: the [mirador-textoverlay plugin](https://github.com/dbmdz/mirador-textoverlay) with a bouncing-ball read-along button, here on* Neue Mannigfaltigkeiten: eine gemeinnützige Wochenschrift *(Woche 010, 31 July 1773), from the [Bayerische Staatsbibliothek](https://www.digitale-sammlungen.de/). Open a page with text, hit the karaoke button, and follow the ball.*

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/JUR86ACmP7U?si=PGs1FtqpiqBpoPWs"
    title="2026 IIIF Annual Conference Day 2, Part 4"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>
</div>

*2026 IIIF Annual Conference Day 2, Part 4*

Ten years ago at the 2016 Working Groups Meeting in the Hague, Tristan, or Triiistan, gave the more soberly titled *Fun with IIIF APIs* — quite possibly one of the first times the community heard its unofficial "I don't care about your scholarly use cases, I'm only here for the fun" opening. A decade on, the bit endures, and so does he.
 
### Thursday: Birds of a Feather in The Hague
 
Thursday moved to The Hague — split across the National Library (KB) and the National Archives (NA) for workshops and Birds of a Feather (BoaF) sessions, running in two-hour blocks morning and afternoon.
 
The one I went to was *Attack of the Scraper Bots: How Can We Manage Impact on Infrastructure*, convened by Martin Kalfatovic (IIIF-C), Jon Dunn (Indiana), and Jonathan Manton (Yale). It's a pointed irony for this community: IIIF was *designed* to facilitate automated reuse, and now large-scale AI scraping is pushing institutions toward exactly the kind of access barriers IIIF was meant to dissolve. The session deliberately avoided proposing a single technical fix, focusing instead on surfacing the broader issues and finding common ground with adjacent worlds (Fedora, Open Repositories, Code4Lib). One concrete pattern that came up, and that I've tagged for work: serving manifests from an S3 bucket behind a proxy. This thread connects backward to IIIF-in-a-Box's concerns from Tuesday — "infrastructure under pressure from AI" was a quiet but persistent undercurrent all week.

That was, of course, only one room of many. The morning ran in parallel with a workshop on *Creating Digital Exhibitions Using the IIIF Manifest Editor and Exhibition Viewer Tools*, a Birds of a Feather on *IIIF as Infrastructure for Ethical AI and Heritage Preservation*, a *Prezi 4.0 — Working with 3D & New Options* session, the *Text as a First-Class Citizen* BoaF, a *Getting Acquainted with Micrio's Storytelling Features* workshop, and the *PerVisum Editorial Workflow* for image-first scholarly publishing. The afternoon offered *Exposing AI Derivatives in IIIF*, *Visual Exploration and Creative Logs with IMMARKUS*, *The IIIF Content Commons* (the BoaF follow-up to Tuesday's opening talk), *[Universal Viewer](https://universalviewer.io/): Contributing, Configuring, and Deploying*, and *User-facing Applications and Integrations Based on Linked Data & IIIF*.

Instead of staying for the afternoon sessions, I headed back to Leiden to visit [Molen de Valk](https://www.molenmuseumdevalk.nl/), the towering 17th-century windmill museum in Leiden — a nice way to let the conference settle.
 
### Ten years on
 
It's a strange and lovely thing to return to the Netherlands a decade after my first IIIF event and find the same community — bigger, more international, wrestling with new questions (AI, sustainability, ethics, scraping) but still recognisably the room I walked into in 2016, slightly bewildered, in The Hague. The friends are still here. The fun is still here. And there's still a great deal I can't read, to borrow Derek Lomas's line — which is, I suppose, the whole point of building things that let us share what we *can*.

![Strolling through beautiful Leiden](https://julsraemy.ch/assets/images/2026iiif-pannenkoeken.jpg)
*Bonus: eating Pannenkoeken for dinner in the Netherlands*
 
Next year the conference heads to Paris, hosted by the [French National Library (BnF)](https://www.bnf.fr/), in the second week of June 2027. *A l'année prochaine !* 