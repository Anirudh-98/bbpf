# Static Assets Directory

Place your static media files in this directory. In Next.js, files inside the `public` folder are served from the root URL path (`/`).

### Structure

- `public/images/`: Store all image files (`.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`, etc.)
  - Access in code: `/images/filename.jpg`
  - Next.js Image component example:
    ```tsx
    import Image from "next/image";

    <Image src="/images/example.jpg" alt="Description" width={800} height={600} />
    ```

- `public/videos/`: Store all video files (`.mp4`, `.webm`, etc.)
  - Access in code: `/videos/filename.mp4`
  - HTML video element example:
    ```tsx
    <video controls>
      <source src="/videos/example.mp4" type="video/mp4" />
    </video>
    ```
