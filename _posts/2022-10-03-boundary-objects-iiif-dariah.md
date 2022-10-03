---
title: "DARIAH-CH Study Day - Back and Forth from Boundary Objects to IIIF Resources (Poster Script)"
excerpt: "The exchange of digital objects and their associated metadata is simplified when these meet established standards, but the capture of all the (meta)information is still very much in tension, at the limits of resources, knowledge and indeed the underlying capabilities of given standards. These limitations can be translated into what Susan Leigh Star defines as residual categories and consequently the generation of boundary objects. The question of these non-standardised residuals within the cultural heritage and digital humanities fields is an iterative identification issue that institutions and individuals have sought to mitigate. 

Take for instance resources conforming to the application programming interfaces (APIs) of the International Image Interoperability Framework (IIIF). These are JSON-LD serialised objects duly specified and vetted by a community trying to break institutional silos. Of particular interest are resources compliant with the IIIF Presentation API which underpins what a Manifest is, i.e. a description of the structure and properties of an object which can be interpreted by a client and displayed to end-users, typically disseminated openly on the Web.

While on the surface or theoretically these IIIF Manifests, which are also referred to as compound objects, could be quite the antithesis of boundary objects, it remains to be seen to what extent IIIF-compatible resources revolve around residual categories and also from what point onward these Manifests have been at some point or revert to boundary objects, whether they are not well-structured or simply because the architecture and constituent software serving and interpreting them do not operate correctly."
toc: true
toc_label: "Table of Contents"
categories:
  - posts
tags:
  - PIA
  - IIIF
  - Boundary Object
  - Star
  - Mirador
  - Annona
  - Universal Viewer
date: 2022-10-03 12:00:42 +0100
---

## DARIAH-CH Study Day - Poster Script

Title of the poster: _Back and Forth from Boundary Objects to IIIF Resources. The Recipes of a Community-driven Initiative Specifying Standards_

### (Submitted) Abstract

The exchange of digital objects and their associated metadata is simplified when these meet established standards, but the capture of all the (meta)information is still very much in tension, at the limits of resources, knowledge and indeed the underlying capabilities of given standards. These limitations can be translated into what Susan Leigh Star defines as residual categories and consequently the generation of boundary objects. The question of these non-standardised residuals within the cultural heritage and digital humanities fields is an iterative identification issue that institutions and individuals have sought to mitigate. 

Take for instance resources conforming to the application programming interfaces (APIs) of the International Image Interoperability Framework (IIIF). These are JSON-LD serialised objects duly specified and vetted by a community trying to break institutional silos. Of particular interest are resources compliant with the [IIIF Presentation API](https://iiif.io/api/presentation/3.0/) which underpins what a Manifest is, i.e. a description of the structure and properties of an object which can be interpreted by a client and displayed to end-users, typically disseminated openly on the Web.

While on the surface or theoretically these IIIF Manifests, which are also referred to as compound objects, could be quite the antithesis of boundary objects, it remains to be seen to what extent IIIF-compatible resources revolve around residual categories and also from what point onward these Manifests have been at some point or revert to boundary objects, whether they are not well-structured or simply because the architecture and constituent software serving and interpreting them do not operate correctly.

## Poster (verbose version)

### Introduction

The exchange of digital objects and their associated metadata is simplified when these meet established standards, but the capture of all the (meta)information is still very much in tension, at the limits of resources, knowledge and indeed the underlying capabilities of given standards.

These limitations can be translated into what Susan Leigh Star defines as residual categories and consequently the generation of boundary objects(1). The question of these non-standardised residuals within the cultural heritage (CH) and digital humanities fields is an iterative identification issue that institutions and individuals have sought to mitigate. A good example still to be investigated are the resources conforming to the application programming interfaces (APIs) of the International Image Interoperability Framework (IIIF) (2), which have been growing in popularity in the CH field for the past decade for disseminating (image-based) digital objects at scale.

### Boundary objects and residual categories

Star (3), in one of her last articles, revisits the often misused concept of boundary object and the temporality aspect illustrated in Figure 1 below, demonstrating to some extent the life cycle of a standardisation effort to restructure the residual categories that generated said boundary objects.

![Relationships between standards and residual categories][fig1_star_boundaryobject]

### IIIF Resources

IIIF resources are JSON-LD serialised objects duly specified and vetted by a community trying to break institutional silos. Of particular interest are resources compliant with the IIIF Presentation API which underpins what a Manifest is, i.e. a description of the structure and properties of the compound object which can be interpreted by a client and displayed to end-users. IIIF Manifests are typically displayed through compatible viewers such as Mirador, the Universal Viewer, or Tify.

While on the surface or theoretically these IIIF Manifests could be quite the antithesis of boundary objects, it remains to be seen to what extent IIIF-compatible resources revolve around residual categories and also from what point onward these Manifests have been at some point or revert to boundary objects, whether they are not well-structured or simply because the architecture and constituent software serving and interpreting them do not operate correctly.

![IIIF Manifests generated as part of the PIA research project and displayed in Mirador][fig2_iiifmanifests_pia]

### The angular momentum of web objects

![Analogy to the angular momentum and IIIF resources as spinning tops][fig3_spinningtop_iiif]

The interpretation of IIIF resources and their related features provides the initial entry point for most end users and are genuine mediators and not mere intermediaries, to echo the words of Latour(4). For determining what are IIIF-compliant resources, one indicator seems relevant to me: the support of patterns correctly interpreted by existing viewers, i.e. the cookbook recipes compiled by IIIF Community members. Metaphorically, my idea is to make an analogy between web content, here IIIF resources, to spinning tops when they are at their augular momentum, which would mean that their rotational inertia (Ι) equals their compliance timeframe (L) as long as the angular velocity (ω) works as expected (1 ≡ yes). Each viewer would be a surface on which force is applied (cf. Figure 3). As of September 2022, the [Viewer Matrix](https://iiif.io/api/cookbook/recipe/matrix/) lists currently 42 unique recipes - divided by functionalities or types - and their support (yes, no, partial) by Mirador, the Universal Viewer (UV) and Annona (cf. Figure 4).

![Viewer support of the IIIF Cookbook recipes (as of September 2022)][fig4_viewersupport]

### Results

![Summary of IIIF Presentation API 3.0 viewer support as spinning tops (Mirador, UV, Annona)][fig5_summary]

### Conclusion

- A shift from rigid standards to software support is needed to perform analysis around boundary object for web content (*it must be noted that conformity from a syntactic point of view, JSON-LD here, is presupposed and out of scope*). I propose the angular momentum analogy as a heuristic evaluation method for assessing the compliance of agreed-upon APIs.
- The generation of compound objects has a technical cost that can only be overcome through the (IIIF) community to mitigate residual categories.
- Further processing is needed as IIIF resources with unsupported patterns are not always discarded by viewers or do not come with a warning.
- The angular momentum analogy is not to set aside the whole underlying architecture of the Web, but rather to acknowledge relevant actants within a given network.

### References

1. Star, S. L., & Griesemer, J. R. (1989). Institutional Ecology, ‘Translations’ and Boundary Objects: Amateurs and Professionals in Berkeley’s Museum of Vertebrate Zoology, 1907-39. _Social Studies of Science, 19_(3), 387–420.
2. Snydman, S., Sanderson, R., & Cramer, T. (2015). The International Image Interoperability Framework (IIIF): A community & technology approach for web-based images. _Archiving Conference, 2015_, 16–21. https://purl.stanford.edu/df650pk4327
3. Star, S. L. (2010). This is Not a Boundary Object: Reflections on the Origin of a Concept. _Science, Technology, & Human Values, 35_(5), 601–617. https://doi.org/10.1177/0162243910377624
4. Latour, B. (2005). _Reassembling the social: An introduction to actor-network-theory_. Oxford University Press. ISBN 978-0-19-925604-4
5. Cross, R. (2013). The rise and fall of spinning tops. _American Journal of Physics, 81_(4), 280–289. https://doi.org/10.1119/1.4776195

**Cite the poster as**
RAEMY, J. A. (2022, October 20). _Back and Forth from Boundary Objects to IIIF resources: The Recipes of a Community-driven Initiative Specifying Standards_. DARIAH CH Study Day. Università della Svizzera Italiana (USI), Mendrisio, Switzerland. https://doi.org/10.5281/zenodo.7015255

[fig1_star_boundaryobject]: https://julsraemy.ch/assets/images/star_boundaryobject.svg
[fig2_iiifmanifests_pia]: https://julsraemy.ch/assets/images/pia_iiif_mirador.png
[fig3_spinningtop_iiif]: https://julsraemy.ch/assets/images/spinningtop_iiif.svg
[fig4_viewersupport]: https://julsraemy.ch/assets/images/viewer_support.svg
[fig5_summary]: https://julsraemy.ch/assets/images/summary_viewers_tops.svg