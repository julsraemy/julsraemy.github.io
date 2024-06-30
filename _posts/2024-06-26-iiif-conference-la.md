---
title: "Some notes from the 2024 IIIF Conference held in Los Angeles"
excerpt: "A post summarising some notes I took from the 2024 International Image Interoperability Framework (IIIF) Annual Conference held in Los Angeles, CA, USA (June 4-7, 2024)."
toc: true
toc_label: "Table of Contents"
categories:
  - posts
tags:
  - 3D
  - API
  - Community
  - Cultural Heritage
  - LOUD
  - IIIF
  - Linked Art
date: 2024-06-26 15:50:28 +0100
---

## 2024 IIIF Conference

The [2024 International Image Interoperability Framework (IIIF) Annual Conference and Showcase](https://iiif.io/event/2024/los-angeles/) was held in Los Angeles, CA, USA, between June 4th and 7th. The conference was hosted by the UCLA (University of California, Los Angeles) Library and the showcase by the Getty.

Since 2017, I have been fortunate to attend all annual in-person conferences and have participated several times in the Program Committee, including this year. Although I used to attend the showcase as well, I stopped doing so in 2022 as it is primarily targeted at newcomers. Therefore, in this post, I will report on a few interesting things I encountered rather than providing a comprehensive overview. Of course, this is my own very biased viewpoint of what is interesting or not.

The first two days, Tuesday and Wednesday, were filled with lightning talks and presentations. Each block consisted of three to five presentations followed by a question session at the end. This is a new format we have adopted at IIIF, and I am quite pleased that, along with others on the Program Committee, we could convince the majority to implement it. Instead of having 1-2 minute questions after each presentation or a short Q&A after a long session, this change allowed for a more engaging and cohesive experience. I believe this change was well received.

The recordings of these sessions are available on the IIIF YouTube Channel as a playlist (click on the thumbnail below).

[![2024 IIIF Conference YouTube Thumbnail](https://i3.ytimg.com/vi/YU1MJNCE4V8/hqdefault.jpg)](https://www.youtube.com/playlist?list=PLYPP1-8uH9c6Ohwk9QTy_-YDTV_58Wn-k)

Thursday consisted of [birds of a feather sessions](https://en.wiktionary.org/wiki/birds-of-a-feather_session), which are essentially workshops or discussions. There were three sessions in the morning and three in the afternoon. I attended one session as I was a co-chair for it, but I must admit I did not participate in the afternoon session and instead went to the [Broxton](https://www.broxtonla.com/), where many informal IIIF conversations (and also two groups of IIIFers played the trivia night there, with one group finishing second) took place during the week. As for Friday, as mentioned earlier, I did not attend the showcase.

### Sate of the IIIF Universe / IIIF Consortium (IIIF-C)

Continuing a well-established tradition, the conference began with the State of the IIIF Universe presentation, delivered by consortium staff members Caitlin Perry and Glen Robson.

This year’s conference also marked an important transition in leadership. Martin Kalfatovic, who was present in L.A., is set to become the new IIIF-C Managing Director, following Josh Hadro's departure at the end of last year after five years of dedicated service. Martin's leadership marks a new chapter for the consortium, as he brings a wealth of experience and a fresh vision for the future of IIIF. His presence at the conference provided an excellent opportunity for the community to engage directly with the incoming director.

#### Strategic Framework

As a reminder, maybe, the Strategic Framework of IIIF-C consists of the following four pillars:

- **Advocacy & Leadership**: This pillar focuses on promoting IIIF adoption and leadership within – and hopefully beyond – the community. Efforts include raising awareness about the benefits of IIIF, fostering partnerships, and encouraging institutions to integrate IIIF into their digital strategies.
- **Technical Development**: This encompasses the continuous improvement and support of IIIF technologies. Key initiatives include community monitoring of tools like Cantaloupe and Mirador, and the development of IIIF-Commons. These efforts ensure that IIIF remains a robust and reliable framework for interoperability.
- **Scholarly Community & Annotation Support**: Recognising the importance of the scholarly community, this pillar aims to create a supportive environment for academic use of IIIF. A new community group will be established to focus on annotation support, facilitating better collaboration in academic research.
- **Membership & Value**: This pillar is dedicated to enhancing the value of IIIF membership and ensuring equitable funding across the consortium. Strategies include diversifying funding sources and creating more inclusive membership opportunities to support a broader range of institutions.

#### Community News

- **New Members**: The University of Leeds and the French Ministry of Culture have joined [IIIF-C](https://iiif.io/community/consortium/) as full members, strengthening the consortium's international presence and collaborative potential.
- **Kess Grant**: This grant has been awarded for 3D Specification Work, supporting the development of the upcoming Presentation API 4.0 and related tools for 3D content.
- **Ambassadors Program**: The revamped [Ambassadors Program](https://iiif.io/community/ambassadors/) aims to enhance global outreach and support for IIIF adoption. Ambassadors should play a crucial role in raising awareness and assisting curernt and new users worldwide.
- **World Training Events**: Between March and April 2024, IIIF conducted training events in multiple languages, including Chinese, English, French, Italian, and Portuguese. [These events](https://www.youtube.com/playlist?list=PLYPP1-8uH9c7gxbIHm4BQcjrPLYLhuZLC) were important in building local communities and providing accessible education about IIIF.
- **IIIF Australia Showcase & Workshops**: Scheduled for October 2024 at the [AI4LAM Fantastic Futures Conference in Canberra](https://www.nfsa.gov.au/fantastic-futures-conference-canberra-2024), this event will highlight IIIF's applications in Australia, offering workshops and presentations.
- **IIIF Guides**: New [guides](https://iiif.io/guides/) tailored for different audiences such as Archives, CIOs, and Museums are being developed. These guides will also be translated, starting with French, to make IIIF more accessible to non-English speaking communities.

#### IIIF Commons - Cantaloupe Immediate Steps

[Cantaloupe](https://cantaloupe-project.github.io/), a key image server in the IIIF ecosystem, is transitioning to a community-led project. Immediate steps include:

- **Integrate Library Updates**: Recent library updates will be merged into the main branch to ensure that all users have access to the latest features and improvements.
- **Integrate outstanding pull requests**: There are several outstanding pull requests that need to be reviewed and integrated. This will streamline development and hopefully improve the overall functionality of Cantaloupe.
- **Build a community**: With the main developer having left Indiana University, it's important to foster a community around Cantaloupe. This community-led approach will ensure the sustainability of the project and encourage collaborative development.

The Cookbook Authors have added Aviary and Glycerine Viewer to the [viewer support matrix](https://iiif.io/api/cookbook/recipe/matrix/), expanding the range of supported clients and providing more options for users to display and interact with IIIF-compliant resources.

### IIIF 3D

Julie Winchester (Duke University) and Ronald Haynes (University of Cambridge) provided exciting updates on the IIIF and 3D work. The IIIF Presentation API 4.0, which will formally support 3D, is expected to be released next year (2025), possibly just before the next annual conference at the University of Leeds in the UK. The most important class in this update is `Scene`, with a positive Y-axis up and Z-axis forward ("right-handed"). The file format will be agnostic. More details can be found in the [draft specification](https://iiif.github.io/3d/temp-draft-4).

### Allmaps

Bert Spaan (Allmaps) and Jules Schoonman (Delft University of Technology) delivered an impressive presentation titled '[Unlocking the richness of digitized map series with IIIF and Allmaps](https://presentations.allmaps.org/iiif-annual-conference-2024#/)' about thousands of sheet maps from the Dutch National Archives, which were previously hard to access. The process involved using a sheet index topographical with corner coordinates, recognized with a machine learning script (also worked with irregular maps), converting from Bonne projection to WGS84, and outputting GeoJSON. Core functionalities of Allmaps include converting pixel coordinates to geospatial coordinates (and vice versa), supporting GeoJSON in the Annotation API, and visualizing all georeferenced maps with vector tiles and Protomaps. They also showcased the [Allmaps Arcade](https://arcade.allmaps.org/), which was a crowd favorite.

### What if we OCR everything?

In a thought-provoking presentation, John Moore (National Archives, UK) explored how the choice of technology can impact the digital footprint of a IIIF-related digital service, specifically [Miiify](https://github.com/nationalarchives/miiify), in terms of extracting annotation data from OCR at scale. Miiify Git stores annotations as text files in a format that is easy to edit manually or by another client, with each annotation being a single file. However, there is a performance cost. Miiify pack follows the principles of distributed working in Git and is used within the Tezos blockchain. The environmental impact of this is significant, with 100 iterations of Git write equating to 405.85g of CO2e, 1.76 KWh, or 2.32 km in a passenger car ([according to this calculator](http://calculator.green-algorithms.org/)). Future work includes modifying existing IIIF viewers to support annotation edit for Git backend, implementing Miiify on MirageOS, and conducting workshops on annotations.

![9dffc645047ee7955cb068cda584744b.png](https://julsraemy.ch/assets/images/9dffc645047ee7955cb068cda584744b.png)

### Kompakkt

Zoë Schubert (Staatsbibliothek Berlin) presented on [3D Manifest with Kompakkt in Babylon.js](https://zetoe.github.io/Talk-IIIF-Annual-Conference-3DManifest-Kompakkt/), sharing lessons learned and challenges faced. The presentation included some delightful GIFs of cats. Key takeaways included the importance of deeply understanding their own code, rethinking past decisions, seeking user feedback to support their needs, and relying on the IIIF 3D Technical Specification Group (TSG) experts for support on all aspects of the manifestos.

![](https://julsraemy.ch/assets/images/kompakkt.png)

### Analytical Support Tools for Historical Drawing Maps

Satoru Nakamura and Taizo Yamada from the University of Tokyo presented their innovative work on the IIIF Georeference extension and a specialized Mirador plugin designed for analyzing historical drawing maps. Their presentation highlighted the development of tools aimed at enhancing the visualization and comparison of historical maps through georeferencing.

One of the key tools they developed is a set of [visualization tools compliant with the IIIF Georeference Extension](https://github.com/nakamura196/iiif_geo). These tools facilitate the analysis of historical maps by integrating georeference data, making it easier to visualize the maps in a geographically accurate context. Additionally, they created [Mirador 3 plugins for comparing annotations](https://github.com/nakamura196/mirador-compare-plugin), which allow users to compare annotations across different maps, providing a powerful tool for historians and researchers.

![c8f0c6f24a0506d904ecb2ecebb60853.png](https://julsraemy.ch/assets/images/c8f0c6f24a0506d904ecb2ecebb60853.png)

A significant enhancement introduced in their work is a property called `cid`, which extends the IIIF specification. This addition allows for more detailed and precise annotations. Moreover, they have implemented a feature that enables users to rotate an image to any arbitrary angle, offering greater flexibility in analyzing map orientations and features.

Looking ahead, Nakamura and Yamada plan to further develop the visualization tools to include features such as alignment using points other than markers, which will improve the accuracy and usability of the georeference tools. They also aim to update the plugin to ensure compatibility with Mirador 4, keeping their tools in line with the latest version of the platform. Additionally, they seek to enhance interactions with aggregated IIIF Manifests on [Cultural Japan](https://cultural.jp/), aiming to provide a richer and more integrated user experience for those exploring Japan's cultural heritage through historical maps.

### Serverless-IIIF

Karen Shaw from Northwestern University Libraries delivered an interesting presentation titled, "Watch me spin up a production-ready, lightning-fast, IIIF image service in less time than it takes to give this talk."

She showcased [Serverless-IIIF](https://github.com/samvera/serverless-iiif), a project within the Samvera community [that requires an AWS account for deployment](https://aws.amazon.com/blogs/publicsector/northwestern-university-libraries-make-research-more-efficient-accessible-with-aws-lambda/). Karen outlined the three different installation paths available, each with specific configurations needed, such as providing the source buckets for the images to be served. This flexibility ensures that users can choose the path that best fits their needs and resources.

The service supports both Version 2 and Version 3 IIIF Manifests. To demonstrate the scalability and performance of the server, Karen leveraged Glen Robson's [loadtest](https://github.com/glenrobson/iiif-loadtest) tool and [Locust](https://locust.io/) to perform comprehensive scalability tests. The results highlighted the efficiency of the serverless IIIF image service.

### Turning Patterned Fabrics into Sound to Make Archival Collections More Accessible. 

Maia Mackay from the University of Leeds delivered a fascinating presentation on transforming textiles into sound using IIIF, a project spearheaded by the [Digital Creativity and Cultures Hub (DCCH)](https://dcch.leeds.ac.uk/). This innovative initiative involves 19th-century project books from the Yorkshire College, now part of the university, which delve into the intricate process of weaving. For those interested in experiencing cymatic patterns through sound, you can listen to them on [YouTube at 36:21](https://youtu.be/ltJKDvXLmlg?si=b_uTSjXnuLLLKomV&t=2181) from the second video of the first day.

![413ea084bdd222ba0ab03c33000c04ca.png](https://julsraemy.ch/assets/images/413ea084bdd222ba0ab03c33000c04ca.png)

Maia highlighted several critical ways IIIF facilitated the project. The deep zoom features of IIIF are crucial for digitally conveying the intricate textures of woven fabrics. The ability to zoom in on the fine details enhances the viewer's appreciation and understanding of the textile's complexity. Additionally, the clarity of the audio resources is paramount to the immersive experience the project aims to provide. IIIF's capabilities ensure that the auditory representation maintains its authenticity and clarity. By combining these features, IIIF supports a unique relationship between visual and auditory representations of the fabrics. This dual-sensory portrayal enriches the accessibility and engagement with the archival collections, making them more accessible to a wider audience. 

### Booksnake

Sean Fraga gave a presentation on [Booksnake](https://booksnake.app/), an iOS-based scholarly application developed at the University of Southern California. This innovative app automatically transforms existing IIIF-compliant resources into life-size virtual objects for interaction in physical space, enhancing the way users engage with digital content. Booksnake allows users to download item images and metadata through IIIF, creating an immersive augmented reality experience. The app has been tested in classrooms to evaluate whether interacting with archival materials in augmented reality affects student learning outcomes compared to traditional web-based viewers.

The results from these tests are promising. Quantitative feedback indicates that Booksnake received better reviews across all four measures: Attention, Relevance, Confidence, and Satisfaction. Qualitative feedback from users highlighted several benefits, such as the ability to get really close to the source material, the focus on one image at a time allowing for detailed examination, and the sensation of seeing the real thing up close adding to the experience.

Sean also shared best practices for using Booksnake. He emphasized choosing embodied activities to fully leverage the app's capabilities, showing rather than telling to let the interaction speak for itself, planning for inclusion to ensure accessibility for all users, and making room for virtual materials by integrating them seamlessly into the learning environment. Booksnake is available for both iPhone and iPad, with the source code set to be released soon. Currently, the materials used are from the Library of Congress.

### DetektIIIF 3

The third version of [DetektIIIF](https://seige.digital/en/detektiiif/), a browser extension for Google Chrome and Firefox capable of identifying IIIF resources on webpages, was presented by its creator, Leander Seige. Originally, DetektIIIF was designed to uncover hidden links to IIIF Manifests, addressing the challenges that IIIF poses for non-technical users.

DetektIIIF offers several basic features. It shows the number of found resources and performs quality checks, displaying a warning if no HTTPS is available or if the ID does not match the URI. Additionally, it provides small tools for tasks such as the creation of collections, making it a handy utility for IIIF users.

Version 3 of DetektIIIF, published in early June, includes new enhancements such as Mirador4 embedded and real-time synchronization via Browser Sync Storage. The extension is currently available in the Chrome Web Store and will soon be available for Firefox. The [source code](https://github.com/seigedigital/detektiiif3) has also been published, allowing developers to contribute and customize the tool further.

### Canvas Panel

[Canvas Panel](https://github.com/digirati-co-uk/iiif-canvas-panel) is a web component developed by Digirati and presented by Tom Crane for this occasion. It functions similarly to how OpenSeadragon works with an image service, but Canvas Panel is designed to handle a IIIF Canvas. This allows for a much richer experience as canvases can include a variety of media types, such as images, audio, and video.

Here is a very basic example:

```
<canvas-panel  
 canvas-id="https://digirati-co-uk.github.io/wunder/canvases/0" 
 manifest-id="https://digirati-co-uk.github.io/wunder.json">  
</canvas-panel>`Tag
```
Canvas Panel offers a range of capabilities. In its simplest form, with no additional attributes, it functions like OpenSeadragon and Leaflet by rendering a viewport where the canvas or a zoomed-in part of it is visible. The component is optimized to be responsive, making image requests that are appropriate to its size on the page, ensuring efficient loading and rendering. Additionally, Canvas Panel supports the display of specific regions of the canvas, enhancing the focus on particular sections.

Accessibility is also a key feature of Canvas Panel. It uses media queries to determine how requests to the IIIF Image API are made, ensuring that the component adapts to different viewing environments and devices, providing an inclusive experience for all users.

### Arvest

Jacob Hart from Université Rennes 2 presented [Arvest](https://arvest.gitpages.huma-num.fr/links), a tool developed by Tetras Libre for the analysis and navigation of collections of digital documents. Arvest functions as a virtual desktop, catering to two user profiles: historians and analysts.

The prototype includes a video annotation application based on Mirador which operates in a multi-user environment built in Django. This environment is designed to be user-friendly and supports storage through PeerTube, making it accessible and versatile. Arvest supports various annotation types with a plugin for the latest version of Mirador, targeting image, video, and audio content. It also allows for time-linked annotations for time-based media, enhancing the depth of analysis possible within the platform.

![1232fea239008b5ebbc9c80770494507.png](https://julsraemy.ch/assets/images/1232fea239008b5ebbc9c80770494507.png)

The project includes three major case studies. COESO focuses on contemporary dance and citizen science, utilizing close reading, distant reading, network analysis, and collaboration. Art Zoyd pertains to electroacoustic music, preservation, and music analysis, emphasising content discovery and music information retrieval. Plozévet involves history, anthropology, and sociology, using computer vision, network analysis, close reading, and distant reading.

A beta version of Arvest is expected to be released around December 2024, with an AV annotation plugin anticipated by October 2024.

### The (Feminist) Art of Integration: Judy Chicago's Archives and IIIF

Dominique Luster from the Pennsylvania State University Libraries presented on 'The (Feminist) Art of Integration: Judy Chicago's Archives and IIIF'.

The vision of the [Judy Chicago Portal](https://judychicagoportal.org/) is to increase online access and pathways to most of Judy Chicago’s collection. Visitors to the portal can view a broader selection of materials, explore pedagogical and creative projects, and engage with a larger community of researchers. Additionally, the portal aims to identify potential areas for collaboration and thematic linking across repositories, emphasizing the impact of Judy’s work and feminist practice.

The project is divided into three phases:

1. **Groundwork**: The initial phase involved creating a website that articulated the project's intent, purpose, and vision. This site featured a small sample of items with links back to the respective repositories and institutions. During this phase, a collaboration site was established while work on the main portal commenced, initially showcasing 50 items from the founding three institutions.
2. **IIIF Integration**: In the second phase, the team surveyed other portals to identify best practices. They planned to organize the works by project, theme, and format, developing a simple common schema based on Dublin Core. Collaborating with partners, they implemented IIIF protocol for thumbnail images, ensuring no images were stored on the portal but were pulled from the home institution’s repository. This phase also involved designing the site architecture and user interface, followed by user testing with researchers and graduate students at each partner institution.
3. **Expansion and Optimization**: The final phase focuses on adding all available records, revising the metadata schema, and conducting further user experience testing and redesign. Additionally, the team is implementing social media and awareness campaigns to increase engagement and visibility.

The project faced challenges due to the varying scales and schedules of the five partners. These challenges included differences in the extent of participation, varying sizes of collections, folder versus item-level records, and the need for metadata alignment across different standards.

### Maktaba

[Maktaba](https://isita.northwestern.edu/research/neh-award-supports-development-of-digital-manuscript-collection.html) is a project from the University of Illinois and the Northwestern University Libraries, focusing on valuable collections of manuscripts from the 19th through the early 20th centuries that represent the Islamic tradition in West Africa. David Schoeber and Mat Jordan from Northwestern University Libraries presented this project, highlighting that their libraries host over 7,000 works in prose and verse written by African Muslims in Arabic and in ‘ajami, African languages written in an adapted Arabic alphabet.

The project utilizes IIIF to offer robust solutions for manuscript preservation and access:
- **Manifests are extendable**, allowing for comprehensive metadata and resource descriptions.
- **Collections unify manifests**, providing a cohesive view of related works.
- **Annotations represent transcriptions and translations** on Canvases, making the content accessible and understandable.
- **Language and internationalization support** ensures that the content can be viewed and understood globally.
- **Viewers and tooling are readily available**, facilitating easy access and interaction with the manuscripts.
- **Reuse and remix capabilities** enable further scholarly and educational use of the materials.

![ffe4e0ac42bf7f420954b023c2b5a856.png](https://julsraemy.ch/assets/images/ffe4e0ac42bf7f420954b023c2b5a856.png)


The Maktaba Collection is organised as an IIIF Collection, with [Canopy IIIF](https://canopy-iiif.vercel.app/) used to generate a static site. Essays are included as Markdown files, providing contextual information and scholarly insights.

IIIF is seen as the backbone of this project, creating lightweight yet powerful applications that enhance the accessibility and usability of these invaluable manuscripts.

### Presentation Plus

'Presentation Plus: Working at the Edges of the Presentation API' was presented by Dan Brennan of the J. Paul Getty Trust. Dan discussed the creation of an image viewer designed to meet some specific needs at the Getty.

One notable project highlighted was the [Dessins photographiques sur Papier. Recueil No. 2](https://www.getty.edu/art/collection/object/1040J2), also known as the Bayard Album, which contains early photography experiments. This album passed through many hands before being acquired by Getty in the 1980s and subsequently disassembled for conservation purposes.

Dan explained that while the Bayard Album project is technically feasible with IIIF, it has not progressed much beyond the initial Châteauroux Demo. A [custom Manifest](https://data.getty.edu/media/manifest/bayard-custom) was created for this project. They employed a method involving a CSV of metadata combined with Python scripts to generate the JSON-LD file, but automating the annotation placement and scaling across 200 Canvases proved challenging.

Several tools were used in the process:
- **Digirati's Manifest Editor**: This [tool](https://manifest-editor.digirati.services/) was helpful, but its interface is not yet novice-friendly, and handling large Manifests can be cumbersome.
- **Canvas Panel**: Provided foundational web components for building a canvas-centric viewer that met the project’s requirements, though there was still a need to build a custom viewer.

A significant amount of work has been done, but Dan Brennan noted that the project remains highly specialised. The [IIIF Cookbook Recipes](https://iiif.io/api/cookbook/recipe/) were invaluable resources throughout the process. Building a viewer posed numerous challenges, prompting philosophical questions about the nature of the digital representation compared to the physical object.

In conclusion, while the project showcased the potential of IIIF, it also highlighted the complexities involved in creating customized digital solutions for unique archival materials.

### IIIF and the Global South: Reaching out to the Un/Underrepresented

Sonaj Kasail from Université Bourgogne Franche-Comté shared valuable insights on the implementation of IIIF in the Global South, with a particular focus on India.

Kasail highlighted the [BnF Shared Heritage initiative](https://www.bnf.fr/en/shared-heritage), specifically the “France - South Asia” digital library, which documents the history of representations and relations between France and countries in South Asia, including India, Bangladesh, Nepal, Sri Lanka, and Pakistan. Notably, none of the partner institutions in South Asia currently implement IIIF.

Regarding IIIF implementation in India, Kasail mentioned two significant projects:

- **[SAMHiTA](https://samhita.iicdelhi.in/)**: An initiative to create a relational database and digital archive of Indian and broadly South Asian manuscripts housed in libraries, archives, and other repositories outside India.
- **[Archives at NCBS](https://archives.ncbs.res.in/home)**: A public center for the history of science in contemporary India, housing over 250,000 processed objects across 30+ collections, including manuscripts, photographs, fine art, audio recordings, scientific equipment, letters, and field and lab notes.

Kasail proposed several solutions to improve IIIF outreach and adoption in the Global South:

- **Enhanced Outreach**: Extend IIIF outreach to regions historically overlooked, including the Global South and other underrepresented areas.
- **Collaborative Opportunities**: Identify potential collaborations with institutions in these regions and encourage them to join the IIIF Consortium.
- **Presence at Events**: Increase IIIF’s presence at relevant conferences, meetings, and other events to raise awareness.
- **Promotion Across Sectors**: Advocate for the adoption of IIIF across both public and private organizations.
- **IIIF Ambassadors**: Appoint ambassadors to promote IIIF in countries of the Global South.
- **Strategic Inclusion**: Integrate global outreach within IIIF’s strategic framework and advocacy efforts.
- **Localized Outreach**: Tailor outreach initiatives to be culturally sensitive and accessible to communities in the Global South.
- **Capacity Building**: Host workshops and training sessions focused on IIIF adoption and implementation in these regions.
- **Regional Partnerships**: Forge partnerships with regional organizations, consortia, and networks to facilitate knowledge sharing and collaboration.
- **Funding Opportunities**: Provide scholarships, grants, and funding opportunities to support participation from researchers, practitioners, and institutions in the Global South.
- **Mentorship Programs**: Establish mentorship programs pairing experienced IIIF practitioners with individuals and institutions in the Global South.
- **Representation and Recognition**: Ensure voices from the Global South are represented within the IIIF community, recognizing their unique contributions and perspectives.

Kasail’s presentation underscored the importance of inclusive and equitable access to digital archival resources, and the potential of IIIF to bridge gaps and foster global collaboration.

### AI/ML Tags in IIIF Manifests

Allison Kelly Sherrick from the Metropolitan New York Library Council presented on creating a better balance and the respectful reuse of AI/ML tags in IIIF Manifests. She proposed the implementation of standardized "no AI" or "regulated AI" tags to govern the use of AI and machine learning on IIIF resources:

- **No AI**: No image or textual ML/AI at all.
- **No Image AI**: No image-based ML/AI, but textual (metadata, OCR, transcript) use is allowed.
- **Regulated AI**:
    - ML/AI Use Permitted - with attribution.
    - ML/AI Use Permitted - with express written consent and attribution.

Sherrick illustrated her points with the parable of a flower. She noted that the average ML/AI operations of major tech companies consume as much water annually as 4-6 small European or African countries, each with a population of around 5 million.

![cca7c8b808e62048fd3f7f0e36851245.png](https://julsraemy.ch/assets/images/flower.png)

She argued that many cultural heritage community members are metaphorically holding their "flowers" and proposed that the IIIF community should leverage these tags to limit the scraping of images and text.

Key points from her presentation included:
- While IIIF is an API-based framework geared towards machine-mediated interactions, its resources are ultimately for human use.
- The use of standardized "no AI" or "regulated AI" tags in IIIF Manifests must be paired with sophisticated, up-to-date DevOps and data security practices.
- As institutions decide to use or integrate ML/AI tools into their repositories, they must consider their curatorial legacies and the complex nature of their content.
- It's crucial to monitor new and evolving ML/AI lawsuits and government regulations worldwide.
- This technology will continue to evolve, requiring diligent application and monitoring for the foreseeable future.

Sherrick’s presentation underscored the importance of balancing technological advancements with respect for cultural heritage and ethical considerations in the use of AI and machine learning.


### Connecting IIIF and Semantic Cultural Heritage Metadata for Discovery

The only birds of a feather session I attended is the one I co-organised with Rob Sanderson (Yale), Kevin Page (Oxford), Daniel Sissman (Getty), Claire Knowles (University of Leeds), and Tom Crane (Digirati) on [connecting IIIF and semantic cultural heritage metadata for discovery](https://docs.google.com/presentation/d/1bVDBglM_Sd0cTubNCamnPCpsFg7IwvMg/edit?pli=1#slide=id.g2e2512dee13_2_12), and most specifically [Linked Art](https://linked.art), a Linked Open Usable Data (LOUD) specification and community.

Many core use cases for IIIF extend beyond images and their presentation, delving into the digitised cultural heritage resources themselves. There is a longstanding desire to discover IIIF-accessible resources by searching the properties and relationships of real-world objects, such as creators, subjects, classifications, or dates. This session explored how organizations are leveraging the Linked Art specification alongside IIIF to realize significant benefits through the joint adoption of these highly usable standards.

Over the past five years, Linked Art has been meticulously designed and implemented, drawing from and intentionally aligning with the community best practices and design principles that IIIF has exemplified. Linked Art uses an existing, standard conceptual model and encodes knowledge using shared patterns in JSON-LD, made accessible via an easy-to-publish and consume web API. This specification has gained international adoption among cultural heritage research and collecting institutions. During our session, we discussed implementation experiences, available tools, and strategies for maintaining and enriching the connection between these overlapping communities and specifications.

Both Linked Art API endpoints and IIIF APIs adhere to similar patterns, offering seamless integration. Key lessons from IIIF include:
- Emphasis on JSON-LD semantics.
- Simplified property names for usability.
- Consistent structure.
- Use of GET for easy caching.
- Sensible partitioning of responses based on usage.
- No stringent URI structure requirements (as seen in IIIF Presentation API).
- Activity Stream-based format for non-semantic APIs (such as Discovery, Content Search, and Annotation Pages).

As a thought-provoking suggestion, Rob Sanderson proposed that:

_Linked Art is the solution to the “discovery challenge” of IIIF. It can describe and connect resources across all cultural and natural heritage domains, is abstract enough to accommodate future domains, and is usable enough to be widely implemented: IIIF should adopt Linked Art as a new TSG and Specification:_.

### Conclusion

I am very happy to have attended this conference, generously supported by the [Swiss National Data and Service Center for the Humanities](https://www.dasch.swiss/) (DaSCH), where I have been working since June 2021. Representing DaSCH on the IIIF Technical Review Committee has been a rewarding experience, and I am grateful for their support. As I transition to working solely at the [Swiss Federal Archives](https://www.bar.admin.ch) at the end of October 2024, I extend my heartfelt thanks to DaSCH.

I am also thankful to my current employer, the Swiss Federal Archives, for allowing me to attend this conference. I will continue being actively involved in the IIIF community for several reasons: I love this community and the learning and networking opportunities it provides, the Swiss Federal Archives have implemented IIIF, and I will continue to serve on the Coordinating Committee (CoCo).

I hope to be at next year’s conference in Leeds, and who knows, perhaps the Swiss Federal Archives will become part of the IIIF Consortium as well! :wink: I truly believe in this initiative, as it has been crucial in my studies (from my bachelor's degree to [my PhD](https://phd.julsraemy.ch)), work, and also personal life with the friends I met along the way.