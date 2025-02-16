"use client"
import Home from '@/app/components/ui/filterPage/home/page';
import ResearchBar from '@/app/components/ui/filterPage/researchBar/page';
import Tags from '@/app/components/ui/filterPage/tags/page';
import Categories from '@/app/components/ui/filterPage/categories/page';
import Filtered from '@/app/components/ui/filterPage/filtered/page';
import projects from '@/app/data/projects.json';
import { useState, useEffect } from 'react';

interface Project {
    id: string;
    title: string;
    category: string[];
    image: string[];
}

interface FilteredProps {
    projects: Project[];
}

export default function Page() {
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleProjectsFiltered = (filteredProjects: Project[]) => {
        setFilteredProjects(filteredProjects);
    };

    const handleCategoriesSelected = (categories: string[]) => {
        setSelectedCategories(categories);
    };

    const handleTagRemove = (tag: string) => {
        const newSelectedCategories = selectedCategories.filter(category => category !== tag);
        setSelectedCategories(newSelectedCategories);
    };

    const filterProjects = () => {
        let filtered = projects;

        if (searchTerm) {
            filtered = filtered.filter(project =>
                project.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategories.length > 0) {
            filtered = filtered.filter(project =>
                selectedCategories.every(category =>
                    project.category.includes(category)
                )
            );
        }

        setFilteredProjects(filtered);
    };

    useEffect(() => {
        filterProjects();
    }, [searchTerm, selectedCategories]);

    return (
        <>
            <Home />
            <main className='px-4 md:px-8'>
                <div className='md:grid md:gap-9 md:grid-cols-5'>
                    <ResearchBar
                        projects={projects}
                        placeholder='Recherchez...'
                        onProjectsFiltered={(searchTerm) => setSearchTerm(searchTerm)}
                    />
                    <Tags tags={selectedCategories} onTagRemove={handleTagRemove} />
                </div>
                <Categories selectedCategories={selectedCategories} onCategoriesSelected={handleCategoriesSelected} />
                <Filtered projects={filteredProjects} />
            </main>
        </>
    );
}