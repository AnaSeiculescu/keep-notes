// This is a module, no need for 'use strict'
// You can npm install packages which help you and import them here
// Vite allows you to import images and css files if necessary

import Masonry from "masonry-layout";

(async function () {
    const apiUrl = "http://localhost:3080/notes";
    const notesList = await fetch(apiUrl).then((res) => res.json());

    const addNoteBtn = document.querySelector("[data-add-note-btn]");
    const notesContainer = document.querySelector("[data-notes-container]");
    const backgroundColorsArr = ["#EDB579", "#5D76B6", "#E15156", "#C2CF74", "#B58BAB"];

    const msnry = new Masonry(notesContainer, {
        itemSelector: ".note",
        columnWidth: 310,
    });

    addNoteBtn.addEventListener("click", handleCreateNewNote);
    notesContainer.addEventListener("keydown", modifyNote);
    notesContainer.addEventListener("keyup", modifyNote);

    displayNotes();

    function createNote() {
        const note = document.createElement("div");
        const noteTitle = document.createElement("span");
        const noteBody = document.createElement("p");

        note.dataset.noteEntity = true;
        note.classList.add("note");
        note.classList.add("playpen-sans");

        noteTitle.contentEditable = true;
        noteTitle.dataset.title = true;
        noteTitle.classList.add("title");
        noteTitle.textContent = "New Note";

        noteBody.dataset.body = true;
        noteBody.contentEditable = true;
        noteBody.classList.add("body");
        noteBody.textContent = "Your text here...";

        note.append(noteTitle, noteBody);

        createDeleteIcon(note);
        createColorPickerIcon(note);
        createColorPickerPanel(note);

        noteTitle.focus();
        noteBody.addEventListener("focus", onFocusHalndler);

        return note;
    }

    function findNoteProperties(note) {
        const title = note.querySelector("[data-title]");
        const body = note.querySelector("[data-body]");
        const backgroundColor = note.style.backgroundColor;

        return [title, body, backgroundColor];
    }

    function getRandomNoteColorFn(arr) {
        let mockArr = [...arr];
        return function () {
            if (mockArr.length === 0) {
                mockArr = [...arr];
            }
            const pickedColorIndex = Math.floor(Math.random() * mockArr.length);
            const pickedColor = mockArr[pickedColorIndex];
            mockArr.splice(pickedColorIndex, 1);
            return pickedColor;
        };
    }

    const getRandomNoteColor = getRandomNoteColorFn(backgroundColorsArr);

    async function handleCreateNewNote(event) {
        event.preventDefault();

        const domNote = createNote();
        const [title, body] = findNoteProperties(domNote);

        domNote.style.backgroundColor = getRandomNoteColor();

        const newNote = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify({
                title: title.textContent,
                body: body.textContent,
                backgroundColor: domNote.style.backgroundColor,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json());

        domNote.dataset.id = newNote.id;

        notesList.unshift(newNote);
        notesContainer.prepend(domNote);
        selectRange(title);
        msnry.prepended(domNote);
    }

    function buildNotes() {
        const fragment = document.createDocumentFragment();
        const mockNotesList = [];

        for (const note of notesList) {
            const domNote = createNote();
            domNote.dataset.id = note.id;

            const [title, body] = findNoteProperties(domNote);
            title.textContent = note.title;
            body.textContent = note.body;
            domNote.style.backgroundColor = note.backgroundColor;
            mockNotesList.push(domNote);
            fragment.append(domNote);
        }

        return { fragment, mockNotesList };
    }

    async function displayNotes() {
        const { fragment, mockNotesList } = buildNotes();
        notesContainer.innerHTML = "";
        notesContainer.append(fragment);
        for (const item of mockNotesList) {
            msnry.prepended(item);
        }
        msnry.layout();
    }

    function createDeleteIcon(note) {
        const deleteIconSvgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        deleteIconSvgContainer.setAttribute("style", "width: 20px; height: 28px");
        deleteIconSvgContainer.setAttribute("viewBox", "0 0 15 15");
        deleteIconSvgContainer.setAttribute("fill", "currentColor");
        deleteIconSvgContainer.setAttribute("class", "w-4 h-4");
        deleteIconSvgContainer.setAttributeNS(
            "http://www.w3.org/2000/xmlns/",
            "xmlns:xlink",
            "http://www.w3.org/1999/xlink"
        );

        const deleteIconPathChild = document.createElementNS("http://www.w3.org/2000/svg", "path");
        deleteIconPathChild.setAttributeNS(null, "fill-rule", "evenodd");
        deleteIconPathChild.setAttributeNS(
            null,
            "d",
            "M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
        );
        deleteIconPathChild.setAttributeNS(null, "clip-rule", "evenodd");

        deleteIconSvgContainer.append(deleteIconPathChild);
        note.append(deleteIconSvgContainer);
        deleteIconSvgContainer.classList.add("delete-icon");

        deleteIconSvgContainer.addEventListener("click", handleDeleteNote);
    }

    async function handleDeleteNote(event) {
        const noteToDelete = identifyItem(event);
        const itemToDeleteId = findItemId(noteToDelete);

        await fetch(`${apiUrl}/${itemToDeleteId}`, {
            method: "DELETE",
        });

        msnry.remove(noteToDelete);

        const index = notesList.findIndex((note) => note.id === itemToDeleteId);
        notesList.splice(index, 1);

        msnry.layout();
    }

    function createColorPickerPanel(note) {
        const colorsPanel = document.createElement("div");
        colorsPanel.classList.add("color-picker-panel");
        colorsPanel.style.display = "none";
        colorsPanel.dataset.colorsPanel = true;

        const specListColors = document.createElement("ul");
        specListColors.classList.add("specified-colors");

        backgroundColorsArr.forEach((elem) => {
            const colorListItem = document.createElement("li");
            colorListItem.classList.add("spec-color");
            colorListItem.style.backgroundColor = elem;
            colorListItem.dataset.specifiedColor = true;

            specListColors.append(colorListItem);
        });
        const colorInputLabel = document.createElement("label");
        colorInputLabel.textContent = "Choose your color: ";

        const colorInput = document.createElement("input");
        colorInput.setAttribute("type", "color");
        colorInput.dataset.inputColor = "true";
        colorInput.addEventListener("change", handleChooseColor, false);

        colorInputLabel.append(colorInput);
        colorsPanel.append(specListColors);
        colorsPanel.append(colorInputLabel);
        note.append(colorsPanel);
        specListColors.addEventListener("click", handleChooseColor);
    }

    function createColorPickerIcon(note) {
        const colorPickerIcon = document.createElement("div");
        colorPickerIcon.classList.add("color-picker-btn");
        colorPickerIcon.dataset.colorPickerIcon = true;
        note.append(colorPickerIcon);
        colorPickerIcon.addEventListener("click", handleToggleColorPicker);
    }

    function handleToggleColorPicker(event) {
        event.stopPropagation();
        const colorPickerPanelsArr = document.querySelectorAll("[data-colors-panel]");
        const presentNote = identifyItem(event);
        const presentColorsPanel = presentNote.querySelector("[data-colors-panel]");

        colorPickerPanelsArr.forEach((panel) => {
            if (panel.style.display === "block" && panel !== presentColorsPanel) {
                panel.style.display = "none";
            }
        });

        if (presentColorsPanel.style.display === "block") {
            presentColorsPanel.style.display = "none";
            return;
        }
        presentColorsPanel.style.display = "block";
    }

    window.addEventListener("click", function (event) {
        const colorPickerPanelsArr = document.querySelectorAll("[data-colors-panel]");
        colorPickerPanelsArr.forEach((panel) => {
            if (event.target !== panel && !panel.contains(event.target)) {
                panel.style.display = "none";
            }
        });
    });

    function handleChooseColor(event) {
        event.stopPropagation();
        const presentNote = identifyItem(event);
        if (event.target.dataset.specifiedColor === "true") {
            const chosenColor = event.target.style.backgroundColor;
            presentNote.style.backgroundColor = chosenColor;

            modifyNote(event);
            return;
        }
        if (event.target.dataset.inputColor === "true") {
            changeNoteColorFromInputColor(event, presentNote);
        }
        modifyNote(event);
    }

    function changeNoteColorFromInputColor(event, note) {
        note.style.backgroundColor = event.target.value;
    }

    function selectRange(element) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    function onFocusHalndler(event) {
        selectRange(event.target);
    }

    async function modifyNote(event) {
        const identifiedItem = identifyItem(event);
        const targetedNoteId = findItemId(identifiedItem);
        const [title, body, backgroundColor] = findNoteProperties(identifiedItem);

        await fetch(`${apiUrl}/${targetedNoteId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title.textContent,
                body: body.textContent,
                backgroundColor: backgroundColor,
            }),
        });

        msnry.layout();
    }

    function identifyItem(event) {
        const selectedNote = event.target.closest("[data-note-entity]");
        if (!selectedNote) {
            return;
        }
        return selectedNote;
    }

    function findItemId(item) {
        const itemId = item.dataset.id;
        return itemId;
    }
})();
