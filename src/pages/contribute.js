import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { ListGroup } from "react-bootstrap"

import Layout from "../templates/Layout"
import Article from "../templates/Article"

import loginImage from "./contribute/login.jpg"
import login2Image from "./contribute/login2.jpg"
import mainPageImage from "./contribute/mainPage.jpg"

import newIngredient1Image from "./contribute/newIngredient1.jpg"
import newIngredient2Image from "./contribute/newIngredient2.jpg"
import newIngredient3Image from "./contribute/newIngredient3.jpg"
import newIngredient4Image from "./contribute/newIngredient4.jpg"
import newIngredient5Image from "./contribute/newIngredient5.jpg"
import newIngredient6Image from "./contribute/newIngredient6.jpg"

export default () => (
  <div>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>
        D&D Crafting - A digital toolset for crafting, recipes, ingredients, and
        locations in Dungeons and Dragons
      </title>
      <meta
        name="description"
        content="Crafting, Cooking, and Alchemy Ingredients and Locations for Dungeons and Dragons"
      />
    </Helmet>

    <Layout>
      <Article title="Contribute to D&D Crafting" noHead>
        <h2>1. Login</h2>
        <p>
          You will need to have an account created on{" "}
          <a href="https://github.com" target="_blank">
            GitHub
          </a>{" "}
          before logging in to use DnD Crafting
        </p>
        <p>
          Once you have created an account,{" "}
          <a href="https://dndcrafting.com/admin/" target="_blank">
            Click Here to Login
          </a>
        </p>
        <div>
          <img src={loginImage} alt="Login" />
        </div>
        <div>
          <img src={login2Image} alt="Login2" />
        </div>
        <h2>2. Edit Collections</h2>
        <p>
          Once you are logged in, you can click on Ingredients, Recipes, or
          Locations to add new entries or edit existing ones.{" "}
        </p>
        <div>
          <img
            style={{ maxWidth: "1000px" }}
            src={mainPageImage}
            alt="Login2"
          />
        </div>
        <h2>3. New Ingredient</h2>
        <h4>Create</h4>
        <p>Click on "New Ingredients" to add a new ingredient.</p>
        <div>
          <img
            style={{ maxWidth: "1000px" }}
            src={newIngredient1Image}
            alt="Login2"
          />
        </div>
        <h4>Enter Details</h4>
        <p>
          Enter a new Name and select a Rarity, then click on "Choose an image"
        </p>
        <div>
          <img
            style={{ maxWidth: "1000px" }}
            src={newIngredient2Image}
            alt="Login2"
          />
        </div>
        <h4>Upload Image</h4>
        <p>
          Click on the "Upload" button in top right to upload your own image.
          Please try to either images you have the rights to, or use a site such
          as{" "}
          <a href="https://unsplash.com" target="_blank">
            Unsplash
          </a>{" "}
        </p>
        <div>
          <img
            style={{ maxWidth: "1000px" }}
            src={newIngredient3Image}
            alt="Login2"
          />
        </div>
        <h4>Select Image</h4>
        <p>
          After Uploading an image, click on the green "Choose selected" button.
          You could also choose from an existing image, and then click the same
          button.
        </p>
        <div>
          <img
            style={{ maxWidth: "1000px" }}
            src={newIngredient4Image}
            alt="Login2"
          />
        </div>
        <h4>Save</h4>
        <p>
          Click on the Save button along the top bar. After it is saved you can
          click the Back button in the top left
        </p>
        <div>
          <img
            style={{ maxWidth: "1000px" }}
            src={newIngredient5Image}
            alt="Login2"
          />
        </div>
        <h4>Workflow</h4>
        <p>
          You will not be able to see your new Entry under "Ingredients" until
          it as approved by a Moderator. To view your created entries, click on
          the "Workflow" tab at the top of the main page. Here you can see your
          new entries, and what stage they are in. You can click on an Entry to
          keep editing it, or remove it.
        </p>
        <div>
          <img
            style={{ maxWidth: "1000px" }}
            src={newIngredient6Image}
            alt="Login2"
          />
        </div>
      </Article>
    </Layout>
  </div>
)
