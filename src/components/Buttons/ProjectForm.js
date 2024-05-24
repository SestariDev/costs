import { useEffect, useState } from "react";
import Input from "../Buttons/Input";
import Select from "../Buttons/select";
import styles from './ProjectForm.module.css'
import SubmitButton from "./SubmitButton";

function ProjectForm({ action, handleSubmit, projectData }) {
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data);
        })
        .catch((err) => console.log(err));
    }, []);

    const submit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!project.nome) {
            newErrors.nome = 'Digite um nome';
        }

        if (!project.orcamento) {
            newErrors.orcamento = 'Informe o orçamento';
        } else if (isNaN(project.orcamento)) {
            newErrors.orcamento = 'O valor deve ser numérico';
        }

        if (!project.category) {
            newErrors.category = 'Selecione uma categoria';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            handleSubmit(project);
        }
    };

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value });
        console.log(project);
    }

    function handleSelect(e) {
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        });
    }

    return (
        <div className={styles.newProjectContainer}>
            <h1 className={styles.formTitle}>
                Novo projeto
            </h1><br></br>

            <form className={styles.newProjectForm} onSubmit={submit}>
                <Input
                    type="text"
                    placeholder="Digite o nome do projeto"
                    id="nome"
                    text="Nome do Projeto"
                    onHandlerChange={handleChange}
                    value={project.nome || ''}
                />
                {errors.nome && <p>{errors.nome}</p>}

                <Input
                    type="number"
                    placeholder="Digite o orçamento do projeto"
                    id="orcamento"
                    text="Digite o orçamento do projeto"
                    onHandlerChange={handleChange}
                    value={project.orcamento || ''}
                />
                {errors.orcamento && <p>{errors.orcamento}</p>}

                <Select
                    id="categoria"
                    classe={styles.selectForm}
                    options={categories}
                    text="Seleciona a categoria"
                    handleOnchange={handleSelect}
                    value={project.category ? project.category.id : ''}
                />
                {errors.category && <p>{errors.category}</p>}

                <SubmitButton text={action} key={'submit'} />
            </form>
        </div>
    );
}

export default ProjectForm;
