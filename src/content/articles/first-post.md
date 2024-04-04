---
title: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
pubDate: 2024-04-03
modDate: 2024-04-04
description: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.'
tags: ['first', 'post', 'last']
draft: true
---

# Paragraph

There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.

Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.

This _italic_ text, **bold** and **_bold italic_**. ~~Remove~~

# Heading

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

# Table

| Column1 | Column2 |
| ------- | ------- |
| Item1.1 | Item2.1 |
| Item1.2 | Item2.2 |

# Image

![coba](https://res.cloudinary.com/dlxiuvlm3/image/upload/v1712034778/Blog/3340828.jpg)

# List

## unorder list

- one
- two
- tree
  - sublist

## order list

1. one
2. two
3. three

## Task

- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars
- [x] ~~Comet Haley~~

# Code Block

```js
import { getEntry } from 'astro:content';
const { slug } = Astro.params;

if (slug === undefined) {
  throw new Error('Slug is required');
}

const entry = await getEntry('articles', slug);

if (entry === undefined) {
  return Astro.redirect('/404');
}

const { Content } = await entry.render();
```

Inline `code0@`

# Block Quote

Here is a simple footnote[^1]. With some additional text after it.

[^1]: My reference.

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

# Link

This is example [internal link](/posts/forth-post)

This is example [external link](https://astro.build/)

My favorite search engine is [Duck Duck Go](https://duckduckgo.com 'The best search engine for privacy').

<https://www.markdownguide.org>
<fake@example.com>

I love supporting the **[EFF](https://eff.org)**.
This is the _[Markdown Guide](https://www.markdownguide.org)_.
See the section on [`code`](#heading).

This **word** is bold. This <em>word</em> is italic.