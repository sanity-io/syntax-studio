# Sanity Studio for Syntax.fm

This is an example studio for how to structure and host podcast content. If you wish to use it with your own content, remember to fix the project id and dataset name in `sanity.json`. You can use [the migration CLI](https://github.com/sanity-io/podcast-to-sanity) we built to import a podcast from its RSS-feed into Sanity.

Documentation for how to get started and use Sanity [can be found here](https://docs.sanity.io).

## Requirements

Instal the Sanity CLI globally

```sh
npm i -g @sanity/cli
```

## Run and develop locally

```
sanity install
sanity start
```

## Deploy changes to the cloud

```
sanity deploy
```
