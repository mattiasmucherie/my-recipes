import { getAllRecipes, getOneRecipe } from "@/utils/recipeUtils";
import styles from "@/styles/Recipe.module.css";
import Link from "next/link";

export default function RecipePage(props) {
  if (!props.recipe) {
    return <div>Not Found</div>;
  }

  return (
    <div>
      <h1 className={styles.title}>{props.recipe.title}</h1>
      <h2 className={styles.subtitle}>{props.recipe.description}</h2>
      <div className={styles.ingredients}>
        <h3>Ingredients</h3>
        <ul>
          {props.recipe.ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
      </div>
      <div className={styles.instructions}>
        <h3>Instructions</h3>
        <ul>
          {props.recipe.instructions.map((inst) => (
            <li key={inst}>{inst}</li>
          ))}
        </ul>
      </div>
      <div className={styles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: getAllRecipes().map((r) => ({ params: { id: String(r.id) } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      recipe: getOneRecipe(context.params.id) || null,
    }, // will be passed to the page component as props
  };
}
