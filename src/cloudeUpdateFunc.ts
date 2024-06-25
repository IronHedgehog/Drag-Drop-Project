// claude version
// interface ProjectElements {
//   templateElement: HTMLTemplateElement;
//   hostElement: HTMLDivElement;
//   formElement: HTMLFormElement;
//   titleInputElement: HTMLInputElement;
//   descriptionInputElement: HTMLInputElement;
//   peopleInputElement: HTMLInputElement;
// }

// const getElement = <T extends HTMLElement>(id: string): T => {
//   const element = document.getElementById(id);
//   if (!element) throw new Error(`Element with id "${id}" not found`);
//   return element as T;
// };

// const refs: Pick<ProjectElements, "templateElement" | "hostElement"> = {
//   templateElement: getElement<HTMLTemplateElement>("project-input"),
//   hostElement: getElement<HTMLDivElement>("app"),
// };

// const createFormElement = (): HTMLFormElement => {
//   const nodesFromTemplate = document.importNode(
//     refs.templateElement.content,
//     true
//   );
//   const formElement = nodesFromTemplate.firstElementChild as HTMLFormElement;
//   if (!formElement) throw new Error("Form element not found in template");
//   return formElement;
// };

// const getInputElement = (
//   formElement: HTMLFormElement,
//   selector: string
// ): HTMLInputElement => {
//   const inputElement = formElement.querySelector<HTMLInputElement>(selector);
//   if (!inputElement) throw new Error(`Input element "${selector}" not found`);
//   return inputElement;
// };

// const submitHandler = (
//   e: Event,
//   elements: Omit<ProjectElements, "templateElement" | "hostElement">
// ): void => {
//   e.preventDefault();
//   console.log(elements.titleInputElement.value);
//   console.log(elements.descriptionInputElement.value);
//   console.log(elements.peopleInputElement.value);
// };

// const configureForm = (
//   elements: Omit<ProjectElements, "templateElement" | "hostElement">
// ): void => {
//   elements.formElement.addEventListener("submit", (e) =>
//     submitHandler(e, elements)
//   );
// };

// const addToHTML = (element: HTMLElement): void => {
//   refs.hostElement.insertAdjacentElement("afterend", element);
// };

// const initProjectInput = (): void => {
//   const formElement = createFormElement();
//   const elements: ProjectElements = {
//     ...refs,
//     formElement,
//     titleInputElement: getInputElement(formElement, "#title"),
//     descriptionInputElement: getInputElement(formElement, "#description"),
//     peopleInputElement: getInputElement(formElement, "#people"),
//   };

//   configureForm(elements);
//   addToHTML(formElement);
// };

// initProjectInput();
