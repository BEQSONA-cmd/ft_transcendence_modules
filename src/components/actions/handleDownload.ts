import jsPDF from "jspdf";
import { FileStyle } from "./Download";

export function handleDownload(fileToDownload: FileStyle) {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 10;
    let y = 20;

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(fileToDownload.head, pageWidth / 2, y, { align: "center" });
    y += 12;

    // Description
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    const descriptionLines = doc.splitTextToSize(fileToDownload.description, pageWidth - 2 * margin);
    doc.text(descriptionLines, margin, y);
    y += descriptionLines.length * 6 + 8;

    // Tasks
    fileToDownload.list.forEach((task) => {
        // --- measure task height before printing ---
        let taskHeight = 0;
        y += 6;

        // Title
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        const taskTitle = `${task.type} - ${task.title}`;
        const taskTitleLines = doc.splitTextToSize(taskTitle, pageWidth - 2 * margin);
        taskHeight += taskTitleLines.length * 7;

        // Description
        if (task.description) {
            doc.setFont("helvetica", "normal");
            doc.setFontSize(11);
            const taskDescLines = doc.splitTextToSize(task.description, pageWidth - 2 * margin);
            taskHeight += taskDescLines.length * 5 + 2;
        }

        // Subtasks
        if (task.tasks && task.tasks.length > 0) {
            doc.setFont("helvetica", "italic");
            doc.setFontSize(10);
            task.tasks.forEach((t) => {
                const taskLines = doc.splitTextToSize("• " + t, pageWidth - 2 * margin - 6);
                taskHeight += taskLines.length * 5 + 2;
            });
        }

        // Divider
        taskHeight += 2;

        // --- check if fits on current page ---
        if (y + taskHeight > pageHeight - 20) {
            doc.addPage();
            y = 20;
        }

        // --- now actually render the task ---
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text(taskTitleLines, margin, y);
        y += taskTitleLines.length * 7;

        if (task.description) {
            doc.setFont("helvetica", "normal");
            doc.setFontSize(11);
            const taskDescLines = doc.splitTextToSize(task.description, pageWidth - 2 * margin);
            doc.text(taskDescLines, margin, y);
            y += taskDescLines.length * 5 + 2;
        }

        if (task.tasks && task.tasks.length > 0) {
            task.tasks.forEach((t) => {
                if (y > pageHeight - 20) {
                    doc.addPage();
                    y = 20;
                }
                doc.setFont("helvetica", "italic");
                doc.setFontSize(10);
                const taskLines = doc.splitTextToSize("• " + t, pageWidth - 2 * margin - 6);
                doc.text(taskLines, margin + 8, y);
                y += taskLines.length * 5 + 2;
            });
        }

        doc.setDrawColor(200, 200, 200);
        doc.line(margin, y, pageWidth - margin, y);
        y += 6;
    });

    // Footer
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.text(fileToDownload.footer, margin, pageHeight - 10);

    // Save PDF
    doc.save("modules.pdf");
}
