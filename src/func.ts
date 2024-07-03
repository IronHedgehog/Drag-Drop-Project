// code on func(my)

// const refs = {
//   templateElement: document.getElementById(
//     "project-input"
//   )! as HTMLTemplateElement,
//   hostElement: document.getElementById("app")! as HTMLDivElement,
// };

// function projAddElements() {
//   const nodesFromTemplate = document.importNode(
//     refs.templateElement.content,
//     true
//   );

//   const formElement = nodesFromTemplate.firstElementChild! as HTMLFormElement;

//   const titleInputElement = formElement.querySelector(
//     "#title"
//   )! as HTMLInputElement;
//   const describeInputElement = formElement.querySelector(
//     "#description"
//   )! as HTMLInputElement;
//   const peopleInputElement = formElement.querySelector(
//     "#people"
//   )! as HTMLInputElement;

//   configForm(
//     formElement,
//     titleInputElement,
//     describeInputElement,
//     peopleInputElement
//   );
//   addToHTML(formElement);
// }
// const submitHandler = (
//   e: Event,
//   titleInputElement: HTMLInputElement,
//   describeInputElement: HTMLInputElement,
//   peopleInputElement: HTMLInputElement
// ) => {
//   e.preventDefault();
//   console.log(titleInputElement.value);
//   console.log(describeInputElement.value);
//   console.log(peopleInputElement.value);
// };

// const configForm = (
//   form: HTMLFormElement,
//   titleInputElement: HTMLInputElement,
//   describeInputElement: HTMLInputElement,
//   peopleInputElement: HTMLInputElement
// ) => {
//   form.addEventListener("submit", (e) =>
//     submitHandler(
//       e,
//       titleInputElement,
//       describeInputElement,
//       peopleInputElement
//     )
//   );
// };

// const addToHTML = <T extends HTMLElement>(element: T) => {
//   refs.hostElement.insertAdjacentElement("afterend", element);
// };

// projAddElements();
