export async function getSyllabus(slug: string) {
    try {
        console.log('Loading syllabus for:', slug);
        const module = await import(`@/app/courses/syllabus/${slug}.ts`);
        // Handle special case for AI in the name
        const syllabusKey = `${slug.replace(/-with-ai/g, 'AI')}Syllabus`.replace(/-/g, '');
        console.log('Looking for export:', syllabusKey);
        if (!module[syllabusKey]) {
            console.error('Syllabus export not found:', syllabusKey);
            return null;
        }
        return module[syllabusKey];
    } catch (error) {
        console.error('Error loading syllabus:', error);
        console.error('Attempted path:', `/app/courses/syllabus/${slug}.ts`);
        return null;
    }
}
