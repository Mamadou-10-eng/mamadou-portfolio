/**
 * Shared Tailwind utilities for the page-section container.
 * Replaces the former `.section` component class and its responsive
 * padding/width overrides with composable utilities.
 */
export const sectionClass =
  'mx-auto w-[min(100%-2rem,var(--container-page))] py-28 max-[1024px]:py-[5.5rem] max-[768px]:py-[4.5rem] max-[480px]:w-[min(100%-1.25rem,var(--container-page))]'
