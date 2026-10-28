# SortLab — Sorting Algorithm Visualizer

An interactive React + Vite + Tailwind CSS learning tool for exploring how sorting algorithms move data.

## Included algorithms

- Bubble Sort
- Insertion Sort
- Selection Sort
- Merge Sort
- Quick Sort
- Heap Sort

Each algorithm has animated bar comparisons with visible values, active/sorted state colors, array-size and animation-speed controls, Random/Sorted/Reverse presets, custom space-separated input, complexity details, live session metrics, and an expandable comparison card.

## Project structure

```text
src/
├── App.jsx                    # Page state and composition
├── components/                # One focused UI component per file
├── algorithms/                # One sorting algorithm per file
├── data/algorithms.js         # Algorithm metadata and input generators
├── utils/                      # Shared step recorder and public exports
└── tailwind.css               # Tailwind CSS entry point
```

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal. To create a production build, run `npm run build`.
